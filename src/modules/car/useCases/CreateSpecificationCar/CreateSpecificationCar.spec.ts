import { CarsRepositoryInMemory } from "@modules/car/infra/inMemory/repositories/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "@modules/car/infra/inMemory/repositories/SpecificationsRepositoryInMemory";
import { IRequestCreateCar } from "@modules/car/interfaces/interfaces";

import { CreateSpecificationCarUseCase } from "./CreateSpecificationCarUseCase";

let carsRepository: CarsRepositoryInMemory;
let specificationsRepository: SpecificationsRepositoryInMemory;
let createSpecificationCarUseCase: CreateSpecificationCarUseCase;

const carSeed: IRequestCreateCar = {
  name: "Nice car",
  description: "A very nice car",
  daily_rate: 200,
  license_plate: "ABC-123",
  fine_amount: 50,
  brand: "Ferrari",
  category_id: "123456",
};

const specificationSeed = {
  name: "cambio automatico",
  description: "diriga com mais tranquilidade",
};

describe("link a specification to a car", () => {
  beforeEach(async () => {
    carsRepository = new CarsRepositoryInMemory();
    specificationsRepository = new SpecificationsRepositoryInMemory();
    createSpecificationCarUseCase = new CreateSpecificationCarUseCase(
      carsRepository,
      specificationsRepository
    );
  });

  it("should link a car to a specification", async () => {
    const car = await carsRepository.create(carSeed);
    const specification = await specificationsRepository.create(
      specificationSeed
    );
    const specifications_ids = [specification.id];

    const result = await createSpecificationCarUseCase.execute(
      car.id,
      specifications_ids
    );

    expect(result).toHaveProperty("specification");
    expect(result.specification.length).toBe(specifications_ids.length);
  });
});
