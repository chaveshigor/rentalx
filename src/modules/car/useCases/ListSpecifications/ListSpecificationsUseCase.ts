import { Specification } from "../../model/Specification";
import { SpecificationsRepository } from "../../repositories/SpecificationsRepository";

function ListSpecificationsUseCase(
  repository: SpecificationsRepository
): Specification[] {
  return repository.list();
}

export { ListSpecificationsUseCase };
