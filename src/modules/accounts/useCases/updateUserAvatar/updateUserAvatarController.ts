import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./updateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { filename } = req.file;
    const { id: user_id } = req.user;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    const user = await updateUserAvatarUseCase.execute({
      user_id,
      avatar_file: filename,
    });

    return res.status(204).json(user);
  }
}

export { UpdateUserAvatarController };
