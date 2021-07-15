import { Category } from "../../model/Category";
import { ICategoryRepositories } from "../../repositories/interfaces/ICategoriesRepository";

class CreateCategoryUseCase {
  private categoriesRepository: ICategoryRepositories;

  constructor(categoriesRepository: ICategoryRepositories) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(name: string, description: string): Category {
    // const categoriesRepository = new CategoriesRepository();
    if (!name || !description) {
      throw new Error("all information about the category must be provided");
    }
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("category already exists");
    }

    const category = this.categoriesRepository.create({ name, description });
    return category;
  }
}

export { CreateCategoryUseCase };
