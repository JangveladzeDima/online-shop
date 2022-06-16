import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class ClientUpdateDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(40)
    @MinLength(2)
    @IsOptional()
    @ApiProperty({ type: String, description: "Client Firstname" })
    firstname?: string
    @MaxLength(40)
    @MinLength(2)
    @IsOptional()
    @ApiProperty({ type: String, description: "Client lastname" })
    lastname?: string
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @MinLength(4)
    @IsOptional()
    @ApiProperty({ type: String, description: "Client Password" })
    password?: string
}
