import { CarsRepositoryInMemory } from "@modules/car/infra/inMemory/repositories/CarsRepositoryInMemory";

import { ListCarUseCase } from "./ListCarsUseCase";

let carsRepository: CarsRepositoryInMemory;
let listCarUseCase: ListCarUseCase;

const car1 = {
  brand: "ferrari",
  category_id: "123",
  daily_rate: 5000,
  description: "the best car",
  fine_amount: 1000,
  license_plate: "abc",
  name: "ferrari x21",
  available: false,
};

const car2 = {
  brand: "fusca",
  category_id: "123",
  daily_rate: 50000,
  description: "the best car",
  fine_amount: 10000,
  license_plate: "abcd",
  name: "fusca azul",
};

const car3 = {
  brand: "fusca",
  category_id: "123",
  daily_rate: 50000,
  description: "the best car",
  fine_amount: 10000,
  license_plate: "abcd",
  name: "fusca verde",
};

const car4 = {
  brand: "ferrari",
  category_id: "123",
  daily_rate: 5000,
  description: "the best car",
  fine_amount: 1000,
  license_plate: "abc",
  name: "ferrari x21",
};

const carsSeed = [car1, car2, car3, car4];

describe("List cars", () => {
  beforeEach(async () => {
    carsRepository = new CarsRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carsRepository);

    carsSeed.map(async (car) => {
      await carsRepository.create(car);
    });
  });

  it("should list just all the available cars", async () => {
    const cars = await listCarUseCase.execute();

    expect(cars).toMatchObject([car2, car3, car4]);
  });

  it("should list all the available cars passing undefined to other values", async () => {
    const cars = await listCarUseCase.execute({
      name: undefined,
      brand: undefined,
      category_id: undefined,
    });

    expect(cars).toMatchObject([car2, car3, car4]);
  });

  it("should list all the available cars by brand", async () => {
    const cars = await listCarUseCase.execute({ brand: "ferrari" });

    expect(cars).toMatchObject([car4]);
  });

  it("should list all the available cars by brand and name", async () => {
    const cars = await listCarUseCase.execute({
      brand: "fusca",
      name: "fusca verde",
    });

    expect(cars).toMatchObject([car3]);
  });
});
