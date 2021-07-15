import { Router } from "express";

import { CategoriesRepository } from "../modules/car/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/car/services/CategoryServices/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const category = createCategoryService.execute(name, description);

  return res.status(201).json(category);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.status(200).json(all);
});

export { categoriesRoutes };
