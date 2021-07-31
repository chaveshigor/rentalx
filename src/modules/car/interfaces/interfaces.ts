interface IRequestCreateCar {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  available?: boolean;
}

interface IListCars {
  name?: string;
  brand?: string;
  category_id?: string;
}

export { IRequestCreateCar, IListCars };
