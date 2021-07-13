import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CategoryServices/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService();
  const category = createCategoryService.execute(name, description);

  return res.status(201).json(category);
});

categoriesRoutes.get("/", (req, res) => {
  const all = categoriesRepository.list();

  return res.status(200).json(all);
});

export { categoriesRoutes };
