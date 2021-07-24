import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/appError";
import { Category } from "../../entities/Category";
import { ICategoryRepositories } from "../../repositories/interfaces/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepositories
  ) {}

  async execute(name: string, description: string): Promise<Category> {
    // const categoriesRepository = new CategoriesRepository();
    if (!name || !description) {
      throw new AppError("all information about the category must be provided");
    }
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );
    if (categoryAlreadyExists) {
      throw new AppError("category already exists", 400);
    }

    const category = await this.categoriesRepository.create({
      name,
      description,
    });
    return category;
  }
}

export { CreateCategoryUseCase };
