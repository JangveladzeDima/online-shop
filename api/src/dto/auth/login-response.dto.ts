import { ApiProperty } from "@nestjs/swagger";

export class LoginResponseDto {
    @ApiProperty({
        type: String,
        description: 'Access Token'
    })
    access_token: string
}