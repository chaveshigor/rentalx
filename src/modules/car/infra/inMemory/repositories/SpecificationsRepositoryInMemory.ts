import {
  ICreateSpecificationDTO,
  ISpecificationRepositories,
} from "@modules/car/interfaces/ISpecificationsRepository";

import { Specification } from "../../typeorm/entities/Specification";

class SpecificationsRepositoryInMemory implements ISpecificationRepositories {
  private repo: Specification[];

  constructor() {
    this.repo = [];
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = this.repo.filter((spec) => ids.includes(spec.id));

    return specifications;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const newSpecification = new Specification();
    Object.assign(newSpecification, {
      name,
      description,
    });
    this.repo.push(newSpecification);

    return newSpecification;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repo.find(
      (specification) => specification.name === name
    );

    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = this.repo;

    return specifications;
  }
}

export { SpecificationsRepositoryInMemory };
