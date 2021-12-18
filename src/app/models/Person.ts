import { address } from "./address";

export class Person{

    id!: string;
    name!: string;
    address! : address;
  }

  export class AddPerson{

    id!:string
    name!: string;
    addressId! : string;
  }
