import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarUseCase } from "./ListCarsUseCase";

class ListCarsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, category_id, brand } = req.body;
    const listCarsUseCase = container.resolve(ListCarUseCase);
    const cars = await listCarsUseCase.execute({ name, category_id, brand });

    return res.json(cars);
  }
}

export { ListCarsController };
