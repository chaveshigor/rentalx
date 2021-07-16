import { Router } from "express";

// Importing controllers
import { createCategoryController } from "../modules/car/useCases/CreateCategory";
import { listCategoriesController } from "../modules/car/useCases/ListCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };
