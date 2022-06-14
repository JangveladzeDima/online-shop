import { Controller, Inject, Logger } from "@nestjs/common"
import { AuthService } from "../service/jwt.service"
import { Payload, MessagePattern } from "@nestjs/microservices"
import { IJwtService } from "../service/jwt-service.interface"
import { JWTPayload } from "../interface/payload.interface"

@Controller()
export class JwtController {
    logger = new Logger(JwtController.name)

    constructor(@Inject(AuthService) private readonly authService: IJwtService) {}

    @MessagePattern("get-jwt-token")
    async generateAccessTokenByMailAndRole(@Payload() userParams: JWTPayload) {
        try {
            return this.authService.generateAccessToken(userParams.email, userParams.role)
        } catch (err) {
            this.logger.error(err)
            return err
        }
    }

    @MessagePattern("get-payload-by-jwt-token")
    async getpayloadBytoken(@Payload() token: string) {
        try {
            return this.authService.validateJwt(token)
        } catch (err) {
            this.logger.error(err)
            return err
        }
    }
}
