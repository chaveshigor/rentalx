import { Router } from "express";
import multer from "multer";

// Importing controllers
import { CreateCategoryController } from "../../../../modules/car/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoriesController } from "../../../../modules/car/useCases/ImportCategories/ImportCategoriesController";
import { ListCategoriesController } from "../../../../modules/car/useCases/ListCategory/ListCategoriesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuth } from "../middlewares/ensureAuth";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post(
  "/",
  ensureAuth,
  ensureAdmin,
  new CreateCategoryController().handle
);

categoriesRoutes.get("/", new ListCategoriesController().handle);

categoriesRoutes.post(
  "/import",
  ensureAuth,
  ensureAdmin,
  upload.single("file"),
  new ImportCategoriesController().handle
);

export { categoriesRoutes };
