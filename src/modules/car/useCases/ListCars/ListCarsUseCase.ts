import { inject, injectable } from "tsyringe";

import { Car } from "@modules/car/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/car/interfaces/ICarsRepository";
import { IListCars } from "@modules/car/interfaces/interfaces";

@injectable()
class ListCarUseCase {
  constructor(
    @inject("CarsRepository")
    private repo: ICarsRepository
  ) {}

  async execute(listData?: IListCars): Promise<Car[]> {
    const cars = await this.repo.listAvailableCars(listData);

    return cars;
  }
}

export { ListCarUseCase };
