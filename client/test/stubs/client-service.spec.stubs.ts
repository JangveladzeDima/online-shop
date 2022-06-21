import { IClient } from "../../src/interface/client.interface";
import { IClientUpdate } from "../../src/interface/client.update.interface";

export const clientStub: IClient = {
    email: "djangvela1dze@unisens.ge",
    password: "dima",
    phoneNumber: "+995579044",
    firstname: "dima",
    lastname: "jangveladze",
}
export const clientStubBadEmail: IClient = {
    email: "djangvela1dze.ge",
    password: "dima",
    phoneNumber: "+995579044",
    firstname: "dima",
    lastname: "jangveladze",
}
export const clientStubSmallPassword: IClient = {
    email: "djangvela1dze@unisens.ge",
    password: "d",
    phoneNumber: "+995579044",
    firstname: "dima",
    lastname: "jangveladze",
}
export const clientStubBadPhoneNumber: IClient = {
    email: "djangvela1dze@unisens.ge",
    password: "dima",
    phoneNumber: "+9044",
    firstname: "dima",
    lastname: "jangveladze",
}
export const clientStubSmallFirstname: IClient = {
    email: "djangvela1dze@unisens.ge",
    password: "dima",
    phoneNumber: "+995579044",
    firstname: "d",
    lastname: "jangveladze",
}
export const clientStubSmallLastname: IClient = {
    email: "djangvela1dze@unisens.ge",
    password: "dima",
    phoneNumber: "+995579044",
    firstname: "dima",
    lastname: "1",
}
export const clientFirstnameUpdateStab: IClientUpdate = {
    firstname: 'gela'
}
export const clientLastnameUpdateStab: IClientUpdate = {
    lastname: 'dvalishvili'
}
export const clientPasswordUpdateStab: IClientUpdate = {
    password: 'axalivsar'
}