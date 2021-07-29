import { inject, injectable } from "tsyringe";

import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { deleteFile } from "@shared/file";

interface IRequestNewAvatar {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private repo: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequestNewAvatar): Promise<User> {
    let user = await this.repo.findOne({ id: user_id });
    await deleteFile(`./tmp/avatar/${user.avatar}`);

    user = await this.repo.updateById(user_id, { avatar: avatar_file });

    return user;
  }
}

export { UpdateUserAvatarUseCase };
