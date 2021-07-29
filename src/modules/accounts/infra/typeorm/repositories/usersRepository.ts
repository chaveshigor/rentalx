import { getRepository, Repository } from "typeorm";

import { ICreateUser, IFindOne, IUpdateById } from "../../../interfaces";
import { IUsersRepository } from "../../../interfaces/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = getRepository(User);
  }

  async updateById(id: string, userData: IUpdateById): Promise<User> {
    await this.repo.update({ id }, userData);

    const user = await this.repo.findOne(id);

    return user;
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
