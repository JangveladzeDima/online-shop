import { Inject, Injectable } from "@nestjs/common";
import { IAuthService } from "./auth-service.interface";
import { LoginParamsDto } from "../../dto/auth/login-params.dto";
import { ClientProxy, RpcException } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('CLIENT_SERVICE') private readonly clientService: ClientProxy,
        @Inject('JWT_SERVICE') private readonly jwtService: ClientProxy
    ) {
    }

    async login(loginParams: LoginParamsDto): Promise<string> {
        const client = await firstValueFrom(this.clientService.send('get', {
            email: loginParams.email
        }))
        if (!client) {
            throw new RpcException({
                message: 'user dont exists',
                code: 400
            })
        }
        const token: string = await firstValueFrom(this.jwtService.send('get-jwt-token', {
            email: loginParams.email,
            role: 'client'
        }))
        return token
    }
}