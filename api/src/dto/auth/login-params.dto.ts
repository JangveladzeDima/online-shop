import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginParamsDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({
        type: String,
        description: 'Client or Admin Email'
    })
    email: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    @ApiProperty({
        type: String,
        description: 'Client or Admin Password'
    })
    password: string
}