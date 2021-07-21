import { Category } from "../../entities/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositories {
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}

export { ICategoryRepositories, ICreateCategoryDTO };
