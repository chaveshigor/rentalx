import { Router } from "express";

import { createSpecificationController } from "../modules/car/useCases/CreateSpecification";

const speficicationsRoutes = Router();

speficicationsRoutes.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

// speficicationsRoutes.get("/", (req, res) => {
//   const listSpecificationsUseCase = new ListSpecificationsUseCase(
//     specificationRepository
//   );
//   const allSpecifications = listSpecificationsUseCase.execute();

//   return res.status(200).json(allSpecifications);
// });

export { speficicationsRoutes };
