import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../../repositories/interfaces/ICategoriesRepository";

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
