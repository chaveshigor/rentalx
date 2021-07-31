import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import { IRequestCreateCar } from "@modules/car/interfaces/interfaces";

import { Car } from "../../typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository {
  private repo: Car[];

  constructor() {
    this.repo = [];
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.repo.find((car) => car.license_plate === license_plate);
    return car;
  }

  async create({
    license_plate,
    fine_amount,
    description,
    daily_rate,
    category_id,
    brand,
    name,
    available,
  }: IRequestCreateCar): Promise<Car> {
    const newCar = new Car();
    Object.assign(newCar, {
      license_plate,
      fine_amount,
      description,
      daily_rate,
      category_id,
      brand,
      name,
      available,
    });

    this.repo.push(newCar);

    return newCar;
  }
}

export { CarsRepositoryInMemory };
