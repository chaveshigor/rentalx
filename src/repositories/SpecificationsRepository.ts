import { Specification } from "../model/Specification";

class SpecificationsRepository {
  private specification: Specification[];

  constructor() {
    this.specification = [];
  }
}

export { SpecificationsRepository };
