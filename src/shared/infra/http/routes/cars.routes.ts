import { Router } from "express";

import { CreateCarController } from "@modules/car/useCases/CreateCar/CreateCarController";
import { ListCarsController } from "@modules/car/useCases/ListCars/ListCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const carsRoutes = Router();

carsRoutes.post("/", ensureAuth, ensureAdmin, new CreateCarController().handle);
carsRoutes.get("/", new ListCarsController().handle);

export { carsRoutes };
