import { Router } from "express";
import multer from "multer";

// Importing controllers
import { CreateCategoryController } from "../../../../modules/car/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoriesController } from "../../../../modules/car/useCases/ImportCategories/ImportCategoriesController";
import { ListCategoriesController } from "../../../../modules/car/useCases/ListCategory/ListCategoriesController";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoriesController.handle
);

export { categoriesRoutes };
