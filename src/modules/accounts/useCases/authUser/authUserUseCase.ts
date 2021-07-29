import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IRequestAuth } from "@modules/accounts/interfaces";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { AppError } from "@shared/errors/appError";

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    driver_license: string;
  };
  token: string;
}

@injectable()
class AuthUserUseCase {
  constructor(
    @inject("UsersRepository")
    private repo: IUsersRepository
  ) {}

  async execute({ email, password }: IRequestAuth): Promise<IResponse> {
    const checkIfUserExists = await this.repo.findOne({ email });
    if (!checkIfUserExists) {
      throw new AppError("User or password incorrect", 401);
    }

    const validPassword = await compare(password, checkIfUserExists.password);
    if (!validPassword) {
      throw new AppError("User or password incorrect", 401);
    }
    const secret = process.env.APP_SECRETKEY || "secret";
    const token = sign({}, secret, {
      subject: checkIfUserExists.id,
      expiresIn: "1d",
    });

    return {
      user: checkIfUserExists,
      token,
    };
  }
}

export { AuthUserUseCase };
