import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength, MinLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class ClientFilterDto {
    @IsNotEmpty()
    @IsOptional()
    @ApiProperty({ type: Number, description: "Client ID" })
    id?: number
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({ type: String, description: "Client Email" })
    email: string
}
