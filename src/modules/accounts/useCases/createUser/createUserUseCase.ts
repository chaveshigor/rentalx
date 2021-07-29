import { genSalt, hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { ICreateUser } from "@modules/accounts/interfaces";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { AppError } from "@shared/errors/appError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private repo: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUser): Promise<User> {
    const checkIfUserExists = await this.repo.findOne({ email });
    const checkIfDriverLicenseExists = await this.repo.findOne({
      driver_license,
    });
    if (checkIfUserExists || checkIfDriverLicenseExists) {
      throw new AppError("User already exists");
    }

    const salt = await genSalt(8);
    const passwordHash = await hash(password, salt);

    const user = await this.repo.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
