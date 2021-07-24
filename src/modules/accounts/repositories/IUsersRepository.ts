import { User } from "../entities/User";
import { ICreateUser, IFindOne } from "../interfaces";

interface IUsersRepository {
  create(newUser: ICreateUser): Promise<User>;
  findOne(user: IFindOne): Promise<User>;
}

export { IUsersRepository };
