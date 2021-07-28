import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/usersRepository";
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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);