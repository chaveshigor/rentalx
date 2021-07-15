import { Router } from "express";

import { SpecificationsRepository } from "../modules/car/repositories/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/car/useCases/CreateSpecification/CreateSpecificationUseCase";
import { ListSpecificationsUseCase } from "../modules/car/useCases/ListSpecifications/ListSpecificationsUseCase";

const speficicationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

speficicationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationUseCase(
    specificationRepository
  );
  const newSpecification = createSpecificationService.execute(
    name,
    description
  );

  return res.status(201).json(newSpecification);
});

speficicationsRoutes.get("/", (req, res) => {
  const allSpecifications = ListSpecificationsUseCase(specificationRepository);

  return res.status(200).json(allSpecifications);
});

export { speficicationsRoutes };
