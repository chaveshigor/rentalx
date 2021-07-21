import { Specification } from "../../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepositories {
  create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
}

export { ISpecificationRepositories, ICreateSpecificationDTO };
