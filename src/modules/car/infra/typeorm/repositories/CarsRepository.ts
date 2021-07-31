import { getRepository, Repository } from "typeorm";

import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import {
  IListCars,
  IRequestCreateCar,
} from "@modules/car/interfaces/interfaces";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repo: Repository<Car>;

  constructor() {
    this.repo = getRepository(Car);
  }
  async findById(id: string): Promise<Car> {
    const car = await this.repo.findOne(id);

    return car;
  }

  async listAvailableCars(listData?: IListCars): Promise<Car[]> {
    let cars = await this.repo.find({ where: { available: true } });

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

  async create({
    license_plate,
    fine_amount,
    description,
    daily_rate,
    category_id,
    brand,
    name,
  }: IRequestCreateCar): Promise<Car> {
    const car = this.repo.create({
      license_plate,
      fine_amount,
      description,
      daily_rate,
      category_id,
      brand,
      name,
    });
    await this.repo.save(car);

    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repo.findOne({ where: { license_plate } });

    return car;
  }
}

export { CarsRepository };
