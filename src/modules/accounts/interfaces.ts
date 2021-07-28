interface ICreateUser {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  avatar?: string;
}

interface IFindOne {
  id?: string;
  name?: string;
  password?: string;
  email?: string;
  driver_license?: string;
}

interface IUpdateById {
  name?: string;
  password?: string;
  email?: string;
  admin?: boolean;
  avatar: string;
  driver_license?: string;
}

interface IRequestAuth {
  email?: string;
  driver_license?: string;
  password: string;
}

export { ICreateUser, IFindOne, IRequestAuth, IUpdateById };
