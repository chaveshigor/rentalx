import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import { ISpecificationRepositories } from "@modules/car/interfaces/ISpecificationsRepository";
import { AppError } from "@shared/errors/appError";

@injectable()
class CreateSpecificationCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepo: ICarsRepository,

    @inject("SpecificationsRepository")
    private specificationsRepo: ISpecificationRepositories
  ) {}

  async execute(car_id: string, specification_ids: string[]): Promise<Car> {
    const car = await this.carsRepo.findById(car_id);
    if (!car) {
      throw new AppError("car dont exists");
    }

    const specifications = await this.specificationsRepo.findByIds(
      specification_ids
    );
    if (!specifications) {
      throw new AppError("specifications dont exists");
    }

    car.specification = specifications;

    await this.carsRepo.create(car);

    return car;
  }
}

export { CreateSpecificationCarUseCase };
