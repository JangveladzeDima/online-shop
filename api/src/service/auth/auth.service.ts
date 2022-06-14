import { Inject, Injectable } from "@nestjs/common";
import { IAuthService } from "./auth-service.interface";
import { LoginParamsDto } from "../../dto/auth/login-params.dto";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { LoginResponseDto } from "../../dto/auth/login-response.dto";

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('CLIENT_SERVICE') private readonly clientService: ClientProxy,
        @Inject('JWT_SERVICE') private readonly jwtService: ClientProxy
    ) {
    }

    async login(loginParams: LoginParamsDto): Promise<LoginResponseDto> {
        const client = await firstValueFrom(this.clientService.send('get', {
            email: loginParams.email
        }))
        if (!client) {
            throw new RpcException({
                message: 'user dont exists',
                code: 400
            })
        }
        const token: LoginResponseDto = await firstValueFrom(this.jwtService.send('get-jwt-token', {
            email: loginParams.email,
            role: 'client'
        }))
        return token
    }
}