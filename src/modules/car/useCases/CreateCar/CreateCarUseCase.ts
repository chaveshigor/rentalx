import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import { IRequestCreateCar } from "@modules/car/interfaces/interfaces";
import { AppError } from "@shared/errors/appError";

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private repo: ICarsRepository
  ) {}
  async execute({
    name,
    available = true,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
  }: IRequestCreateCar): Promise<Car> {
    const existentCar = await this.repo.findByLicensePlate(license_plate);
    if (existentCar) {
      throw new AppError("car with this license plate already exists");
    }

    const newCar = await this.repo.create({
      name,
      available,
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
    });

    return newCar;
  }
}

export { CreateCarUseCase };
