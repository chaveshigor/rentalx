import { Router } from "express";

import { CreateCarController } from "@modules/car/useCases/CreateCar/CreateCarController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const carsRoutes = Router();

carsRoutes.post("/", ensureAuth, ensureAdmin, new CreateCarController().handle);

export { carsRoutes };
