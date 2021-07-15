import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepositories {
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoryRepositories, ICreateCategoryDTO };
