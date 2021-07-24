interface ICreateUser {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

interface IFindOne {
  id?: string;
  name?: string;
  password?: string;
  email?: string;
  driver_license?: string;
}

interface IRequestAuth {
  email?: string;
  driver_license?: string;
  password: string;
}

export { ICreateUser, IFindOne, IRequestAuth };
