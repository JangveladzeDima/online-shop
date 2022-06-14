import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class ClientRegistrationDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({ type: String, description: "Client Email" })
    email: string
    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber()
    @ApiProperty({ type: String, description: "Client Phone Number" })
    phoneNumber: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    @MinLength(2)
    @ApiProperty({ type: String, description: "Client Firstname" })
    firstname: string
    @MaxLength(40)
    @MinLength(2)
    @ApiProperty({ type: String, description: "Client lastname" })
    lastname: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    @ApiProperty({ type: String, description: "Client Password" })
    password: string
}
