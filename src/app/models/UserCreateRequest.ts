export class UserCreateRequest {
  id: string | null;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  birthDay: Date;
  address: {
    cep: string;
    street: string;
    complement: string;
    neighborhood: string;
    uf: string;
    number: number;
  };
  password: string;

  constructor(
    id: string | null,
    name: string,
    phone: string,
    email: string,
    cpf: string,
    birthDay: Date,
    address: {
      cep: string;
      street: string;
      complement: string;
      neighborhood: string;
      uf: string;
      number: number;
    },
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.cpf = cpf;
    this.birthDay = birthDay;
    this.address = address;
    this.password = password;
  }
}
