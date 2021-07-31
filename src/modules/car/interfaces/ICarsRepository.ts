import { Car } from "../infra/typeorm/entities/Car";
import { IListCars, IRequestCreateCar } from "./interfaces";

interface ICarsRepository {
  create({
    license_plate,
    fine_amount,
    description,
    daily_rate,
    category_id,
    brand,
    name,
  }: IRequestCreateCar): Promise<Car>;

  findByLicensePlate(license_plate: string): Promise<Car>;
  listAvailableCars(listData?: IListCars): Promise<Car[]>;
}

export { ICarsRepository };
