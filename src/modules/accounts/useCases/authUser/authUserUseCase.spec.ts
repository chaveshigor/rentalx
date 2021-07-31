import { UsersRepositoryInMemory } from "@modules/accounts/infra/inMemory/repositories/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/appError";

import { CreateUserUseCase } from "../createUser/createUserUseCase";
import { AuthUserUseCase } from "./authUserUseCase";

let usersRepository: UsersRepositoryInMemory;
let authUserUseCase: AuthUserUseCase;
let createUserUseCase: CreateUserUseCase;

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    driver_license: string;
  };
  token: string;
}

describe("User authentication", () => {
  const userSeed = {
    name: "higor",
    email: "higor@example.com",
    driver_license: "147852",
    password: "123456",
  };

  beforeEach(async () => {
    usersRepository = new UsersRepositoryInMemory();
    authUserUseCase = new AuthUserUseCase(usersRepository);
    createUserUseCase = new CreateUserUseCase(usersRepository);

    const { name, email, driver_license, password } = userSeed;
    await createUserUseCase.execute({
      name,
      email,
      driver_license,
      password,
    });
  });

  it("should authenticate an existent user", async () => {
    const { email, password } = userSeed;
    const userInfo = await authUserUseCase.execute({ email, password });

    expect(userInfo.token).toBeTruthy();
  });

  it("should not authenticate an unexistent user", async () => {
    const { password } = userSeed;
    let userInfo: IResponse | undefined;

    try {
      userInfo = await authUserUseCase.execute({
        email: "hygor@example.com",
        password,
      });
    } catch (error) {
      expect(error.message).toBe("User or password incorrect");
      expect(error.statusCode).toBe(401);
    }

    expect(userInfo).toBeUndefined();
  });

  it("should not authenticate an user with a wrong password", async () => {
    expect(async () => {
      const { email } = userSeed;
      await authUserUseCase.execute({
        email,
        password: "wrong password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
