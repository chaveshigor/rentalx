import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
  async handle(req: Request, res: Response) {
    const {
      name,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      brand,
    } = req.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);
    const newCar = await createCarUseCase.execute({
      name,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      brand,
    });

    return res.status(201).json(newCar);
  }
}

export { CreateCarController };
