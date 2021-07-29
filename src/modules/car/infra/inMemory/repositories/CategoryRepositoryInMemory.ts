import {
  ICategoryRepositories,
  ICreateCategoryDTO,
} from "../../../interfaces/ICategoriesRepository";
import { Category } from "../../typeorm/entities/Category";

class CategoryRepositoryInMemory implements ICategoryRepositories {
  private repo: Category[];

  constructor() {
    this.repo = [];
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
    });
    this.repo.push(newCategory);

    return newCategory;
  }
  async findByName(name: string): Promise<Category> {
    const category = this.repo.find((category) => category.name === name);

    return category;
  }
  async list(): Promise<Category[]> {
    const allCategories = this.repo;

    return allCategories;
  }
}

export { CategoryRepositoryInMemory };
