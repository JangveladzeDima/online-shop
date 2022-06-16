import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common"
import { IAuthService } from "./auth-service.interface"
import { LoginParamsDto } from "../../dto/auth/login-params.dto"
import { ClientProxy, RpcException } from "@nestjs/microservices"
import { firstValueFrom } from "rxjs"
import { LoginResponseDto } from "../../dto/auth/login-response.dto"
import { IClient } from "../../model/client.interface"

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject("CLIENT_SERVICE") private readonly clientService: ClientProxy,
        @Inject("JWT_SERVICE") private readonly jwtService: ClientProxy,
        @Inject("HASH_SERVICE") private readonly hashService: ClientProxy,
    ) {}

    async login(loginParams: LoginParamsDto): Promise<LoginResponseDto> {
        const client: IClient = await firstValueFrom(
            this.clientService.send("get", {
                email: loginParams.email,
            }),
        )
        if (!client) {
            throw new RpcException({
                message: "user dont exists",
                code: 400,
            })
        }
        const hash = await firstValueFrom(
            this.hashService.send("get-hash-by-salt", {
                text: loginParams.password,
                salt: client.salt,
            }),
        )
        if (hash !== client.password) {
            throw new RpcException({
                message: "Password is incorrect",
                code: 400,
            })
        }
        const token: LoginResponseDto = await firstValueFrom(
            this.jwtService.send("get-jwt-token", {
                email: loginParams.email,
                role: "client",
            }),
        )
        return token
    }
}
