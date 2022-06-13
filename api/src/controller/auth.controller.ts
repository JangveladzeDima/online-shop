import { Body, Controller, HttpException, Inject, Logger, Post } from "@nestjs/common";
import { LoginParamsDto } from "../dto/auth/login-params.dto";
import { IAuthService } from "../service/auth/auth-service.interface";
import { AuthService } from "../service/auth/auth.service";

@Controller('/auth')
export class AuthController {
    logger = new Logger()

    constructor(
        @Inject(AuthService) private readonly authService: IAuthService
    ) {
    }

    @Post('/login')
    async login(@Body() loginParams: LoginParamsDto) {
        try {
            const token = await this.authService.login(loginParams)
            return token
        } catch (err) {
            this.logger.error(err.message)
            const { message, code } = err.error
            throw new HttpException(message, code)
        }
    }
}