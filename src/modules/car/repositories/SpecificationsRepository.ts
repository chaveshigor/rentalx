import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO } from "./interfaces/ISpecificationsRepository";

class SpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const newSpecification: Specification = {
      name,
      description,
      created_at: new Date(),
    };

    this.specifications.push(newSpecification);
    return newSpecification;
  }

  findByName(name: string): Specification {
    console.log("findByName");
    const currentSpecification = this.specifications.find(
      (specif) => specif.name === name
    );

    return currentSpecification;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
