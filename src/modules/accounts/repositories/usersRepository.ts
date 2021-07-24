import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";
import { ICreateUser, IFindOne } from "../interfaces";
import { IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = getRepository(User);
  }
  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUser): Promise<User> {
    const user = this.repo.create({
      name,
      email,
      password,
      driver_license,
    });
    await this.repo.save(user);

    return user;
  }
  async findOne(userData: IFindOne): Promise<User> {
    const user = await this.repo.findOne({
      where: userData,
    });

    return user;
  }
}

export { UsersRepository };
