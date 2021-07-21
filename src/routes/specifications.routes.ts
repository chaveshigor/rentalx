import { Router } from "express";

import { CreateSpecificationController } from "../modules/car/useCases/CreateSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/car/useCases/ListSpecifications/ListSpecificationController";

const speficicationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

speficicationsRoutes.post("/", createSpecificationController.handle);

speficicationsRoutes.get("/", listSpecificationController.handle);

export { speficicationsRoutes };
