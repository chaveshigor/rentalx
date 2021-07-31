import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import {
  IListCars,
  IRequestCreateCar,
} from "@modules/car/interfaces/interfaces";

import { Car } from "../../typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository {
  private repo: Car[];

  constructor() {
    this.repo = [];
  }

  async findById(id: string): Promise<Car> {
    const car = this.repo.find((car) => car.id === id);

    return car;
  }

  async listAvailableCars(listData?: IListCars): Promise<Car[]> {
    let cars = this.repo.filter((car) => car.available === true);

    if (listData) {
      if (listData.category_id) {
        cars = cars.filter((car) => car.category_id === listData.category_id);
      }
      if (listData.brand) {
        cars = cars.filter((car) => car.brand === listData.brand);
      }
      if (listData.name) {
        cars = cars.filter((car) => car.name === listData.name);
      }
    }

    return cars;
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
    available = true,
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
