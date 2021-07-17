import { Router } from "express";
import multer from "multer";

// Importing controllers
import { createCategoryController } from "../modules/car/useCases/CreateCategory";
import { importCategoriesController } from "../modules/car/useCases/ImportCategories";
import { listCategoriesController } from "../modules/car/useCases/ListCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoriesController.handle(req, res);
});

export { categoriesRoutes };
