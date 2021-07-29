import { User } from "../infra/typeorm/entities/User";
import { ICreateUser, IFindOne, IUpdateById } from "../interfaces";

interface IUsersRepository {
  create(newUser: ICreateUser): Promise<User>;
  findOne(user: IFindOne): Promise<User>;
  updateById(id: string, userData: IUpdateById): Promise<User>;
}

export { IUsersRepository };
