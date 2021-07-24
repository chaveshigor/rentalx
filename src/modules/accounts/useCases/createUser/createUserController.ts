import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, driver_license } = req.body;

    const repo = container.resolve(CreateUserUseCase);
    const user = await repo.execute({
      name,
      email,
      password,
      driver_license,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
