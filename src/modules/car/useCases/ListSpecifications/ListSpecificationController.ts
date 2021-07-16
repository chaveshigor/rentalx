import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

class ListSpecificationController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.listSpecificationsUseCase.execute();

    return res.json(allSpecifications);
  }
}

export { ListSpecificationController };
