import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpecificationCarUseCase } from "./CreateSpecificationCarUseCase";

class CreateSpecificationCarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { car_id, specification_id } = req.body;

    const createSpecificationCarUseCase = container.resolve(
      CreateSpecificationCarUseCase
    );

    const car = await createSpecificationCarUseCase.execute(
      car_id,
      specification_id
    );

    return res.json(car);
  }
}

export { CreateSpecificationCarController };
