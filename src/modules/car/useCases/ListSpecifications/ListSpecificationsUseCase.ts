import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  private specificationsRepository: ISpecificationRepositories;

  constructor(
    @inject("SpecificationsRepository")
    specificationsRepository: ISpecificationRepositories
  ) {
    this.specificationsRepository = specificationsRepository;
  }

  async execute(): Promise<Specification[]> {
    const allSpecifications = await this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
