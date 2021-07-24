import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/appError";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepositories
  ) {}

  async execute(name: string, description: string): Promise<Specification> {
    if (!name || !description) {
      throw new AppError(
        "all information about the specification must be provided"
      );
    }
    const newSpecification = await this.specificationRepository.create({
      name,
      description,
    });
    return newSpecification;
  }
}

export { CreateSpecificationUseCase };
