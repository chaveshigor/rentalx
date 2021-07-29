import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/usersRepository";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { CategoriesRepository } from "@modules/car/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/car/infra/typeorm/repositories/SpecificationsRepository";
import { ICategoryRepositories } from "@modules/car/interfaces/ICategoriesRepository";
import { ISpecificationRepositories } from "@modules/car/interfaces/ISpecificationsRepository";

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
