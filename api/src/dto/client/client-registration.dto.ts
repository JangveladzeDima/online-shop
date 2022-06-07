import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator";

export class ClientRegistrationDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber()
    phoneNumber: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    @MinLength(2)
    firstname: string
    @MaxLength(40)
    @MinLength(2)
    lastname: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    password: string
}