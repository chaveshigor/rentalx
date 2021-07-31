import { getRepository, Repository } from "typeorm";

import {
  ICreateSpecificationDTO,
  ISpecificationRepositories,
} from "../../../interfaces/ISpecificationsRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationRepositories {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = getRepository(Specification);
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.specifications.findByIds(ids);

    return specifications;
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const newSpecification = this.specifications.create({ name, description });
    await this.specifications.save(newSpecification);

    return newSpecification;
  }

  async findByName(name: string): Promise<Specification> {
    const currentSpecification = await this.specifications.findOne({
      where: { name },
    });

    return currentSpecification;
  }

  async list(): Promise<Specification[]> {
    const allSpecifications = await this.specifications.find();

    return allSpecifications;
  }
}

export { SpecificationsRepository };
