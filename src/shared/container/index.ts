import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/car/repositories/CategoriesRepository";
import { ICategoryRepositories } from "../../modules/car/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepositories } from "../../modules/car/repositories/interfaces/ISpecificationsRepository";
import { SpecificationsRepository } from "../../modules/car/repositories/SpecificationsRepository";

container.registerSingleton<ICategoryRepositories>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepositories>(
  "SpecificationsRepository",
  SpecificationsRepository
);
