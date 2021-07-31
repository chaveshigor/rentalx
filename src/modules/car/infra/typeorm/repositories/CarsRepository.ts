import { getRepository, Repository } from "typeorm";

import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import { IRequestCreateCar } from "@modules/car/interfaces/interfaces";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repo: Repository<Car>;

  constructor() {
    this.repo = getRepository(Car);
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
