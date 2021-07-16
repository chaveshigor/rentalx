import { Specification } from "../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepositories,
} from "./interfaces/ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepositories {
  private specifications: Specification[];

  private static Instance: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.Instance) {
      this.Instance = new SpecificationsRepository();
    }

    return this.Instance;
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
