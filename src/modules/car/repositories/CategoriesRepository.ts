import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";
import {
  ICreateCategoryDTO,
  ICategoryRepositories,
} from "./interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoryRepositories {
  private categories: Repository<Category>;

  constructor() {
    this.categories = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.categories.create({
      name,
      description,
    });

    await this.categories.save(category);

    return category;
  }

  async list(): Promise<Category[]> {
    const allItens = await this.categories.find();

    return allItens;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.categories.findOne({
      where: { name },
    });
    return category;
  }
}

export { CategoriesRepository };
