import { inject, injectable } from "tsyringe";

import { Specification } from "@modules/car/infra/typeorm/entities/Specification";
import { ISpecificationRepositories } from "@modules/car/interfaces/ISpecificationsRepository";
import { AppError } from "@shared/errors/appError";

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
