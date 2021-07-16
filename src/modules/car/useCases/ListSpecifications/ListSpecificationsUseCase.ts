import { Specification } from "../../model/Specification";
import { ISpecificationRepositories } from "../../repositories/interfaces/ISpecificationsRepository";

class ListSpecificationsUseCase {
  private specificationsRepository: ISpecificationRepositories;

  constructor(specificationsRepository: ISpecificationRepositories) {
    this.specificationsRepository = specificationsRepository;
  }

  execute(): Specification[] {
    const allSpecifications = this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationsUseCase };
