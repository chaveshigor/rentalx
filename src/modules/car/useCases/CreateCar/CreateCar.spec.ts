import { CarsRepositoryInMemory } from "@modules/car/infra/inMemory/repositories/CarsRepositoryInMemory";
import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { IRequestCreateCar } from "@modules/car/interfaces/interfaces";

import { CreateCarUseCase } from "./CreateCarUseCase";

let carsRepository: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

const carSeed: IRequestCreateCar = {
  name: "Nice car",
  description: "A very nice car",
  daily_rate: 200,
  license_plate: "ABC-123",
  fine_amount: 50,
  brand: "Ferrari",
  category_id: "123456",
};

describe("Create a car", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should create a car", async () => {
    const car = await createCarUseCase.execute(carSeed);

    expect(car).toMatchObject(carSeed);
    expect(car.available).toBe(true);
  });

  it("should create a car with available property as false", async () => {
    const {
      brand,
      license_plate,
      fine_amount,
      description,
      daily_rate,
      category_id,
      name,
    } = carSeed;
    const car = await createCarUseCase.execute({
      brand,
      license_plate,
      fine_amount,
      description,
      daily_rate,
      category_id,
      name,
      available: false,
    });
    expect(car).toMatchObject(carSeed);
    expect(car.available).toBe(false);
  });

  it("should not create a car with an existent license plate", async () => {
    let car: Car;
    try {
      car = await createCarUseCase.execute(carSeed);
      car = await createCarUseCase.execute(carSeed);
    } catch (error) {
      car = error.message;
    }

    expect(car).toBe("car with this license plate already exists");
  });
});
