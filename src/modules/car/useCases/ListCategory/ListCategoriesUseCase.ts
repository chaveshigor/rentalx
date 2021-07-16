import { Category } from "../../model/Category";
import { ICategoryRepositories } from "../../repositories/interfaces/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepositories) {}
  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
