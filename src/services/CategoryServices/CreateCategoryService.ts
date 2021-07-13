import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class CreateCategoryService {
  execute(name: string, description: string): Category {
    const categoriesRepository = new CategoriesRepository();
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("category already exists");
    }

    const category = categoriesRepository.create({ name, description });
    return category;
  }
}

export { CreateCategoryService };
