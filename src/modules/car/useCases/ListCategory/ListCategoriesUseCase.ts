import { inject, injectable } from "tsyringe";

import { Category } from "@modules/car/infra/typeorm/entities/Category";
import { ICategoryRepositories } from "@modules/car/interfaces/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepositories
  ) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepository.list();
    return allCategories;
  }
}

export { ListCategoriesUseCase };
