import { Router } from "express";

import { SpecificationsRepository } from "../modules/car/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/car/services/SpecificationServices/CreateSpecificationService";

const speficicationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

speficicationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );
  const newSpecification = createSpecificationService.execute(
    name,
    description
  );

  return res.status(201).json(newSpecification);
});

export { speficicationsRoutes };
