import { container } from "tsyringe";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/usersRepository";
import { IUsersRepository } from "@modules/accounts/interfaces/IUsersRepository";
import { CarsRepository } from "@modules/car/infra/typeorm/repositories/CarsRepository";
import { CategoriesRepository } from "@modules/car/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/car/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
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

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
