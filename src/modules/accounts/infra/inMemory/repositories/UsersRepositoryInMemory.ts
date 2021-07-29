import {
  ICreateUser,
  IFindOne,
  IUpdateById,
} from "@modules/accounts/interfaces";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";

import { User } from "../../typeorm/entities/User";

class UsersRepositoryInMemory implements IUsersRepository {
  private repo: User[];

  constructor() {
    this.repo = [];
  }

  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUser): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, {
      driver_license,
      email,
      name,
      password,
    });
    this.repo.push(newUser);

    return newUser;
  }

  async findOne({ email, id }: IFindOne): Promise<User | undefined> {
    if (id) {
      const user = this.repo.find((user) => user.id === id);
      return user;
    }
    if (email) {
      const user = this.repo.find((user) => user.email === email);
      return user;
    }

    return undefined;
  }
  async updateById(
    id: string,
    { avatar, admin, email, driver_license, name, password }: IUpdateById
  ): Promise<User> {
    const user = this.repo.find((user) => user.id === id);
    const userIndex = this.repo.indexOf(user);

    Object.assign(this.repo[userIndex], {
      avatar,
      admin,
      email,
      driver_license,
      name,
      password,
    });

    return this.repo[userIndex];
  }
}

export { UsersRepositoryInMemory };
