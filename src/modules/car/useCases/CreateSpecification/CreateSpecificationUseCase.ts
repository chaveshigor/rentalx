import { Specification } from "../../model/Specification";
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationsRepository";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

class CreateSpecificationUseCase {
  private specificationRepository: ISpecificationRepositories;

  constructor(specificationRepository: ISpecificationRepositories) {
    this.specificationRepository = specificationRepository;
  }

  execute(name: string, description: string): Specification {
    if (!name || !description) {
      throw new Error(
        "all information about the specification must be provided"
      );
    }
    const newSpecification = this.specificationRepository.create({
      name,
      description,
    });
    return newSpecification;
  }
}

export { CreateSpecificationUseCase };
