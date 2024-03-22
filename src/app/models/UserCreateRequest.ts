export class UserCreateRequest {
  id: string | null;
  fullName: string;
  ddd: number;
  phone: number;
  email: string;
  cpf: string;
  birthDay: Date;
  address: {
    cep: string;
    street: string;
    complement: string;
    neighborhood: string;
    state: string;
    city: string;
    number: string;
  };
  password: string;

  constructor(
    id: string | null,
    fullName: string,
    ddd: number,
    phone: number,
    email: string,
    cpf: string,
    birthDay: Date,
    address: {
      cep: string;
      street: string;
      complement: string;
      neighborhood: string;
      state: string;
      number: string;
      city: string;
    },
    password: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.ddd = ddd;
    this.phone = phone;
    this.email = email;
    this.cpf = cpf;
    this.birthDay = birthDay;
    this.address = address;
    this.password = password;
  }
}
