import { Router } from "express";

import { createSpecificationController } from "../modules/car/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/car/useCases/ListSpecifications";

const speficicationsRoutes = Router();

speficicationsRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

speficicationsRoutes.get("/", (req, res) => {
  return listSpecificationController.handle(req, res);
});

export { speficicationsRoutes };
