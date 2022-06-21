import { Controller, Inject, Logger } from "@nestjs/common"
import { IOtpService } from "../service/otp-service.interface"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { OtpService } from "../service/otp.service"
import { UpdateParams } from "../interface/updateparams.interface"

@Controller("forgotpassword")
export class OtpController {
    logger = new Logger(OtpController.name)

    constructor(@Inject(OtpService) private readonly otpService: IOtpService) {}

    @MessagePattern("generate-and-send-otp")
    async getClient(@Payload() email: string) {
        try {
            return this.otpService.generateAndSendOtp(email)
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }

    @MessagePattern("update-forgotten-password")
    async addClient(@Payload() params: UpdateParams) {
        try {
            return this.otpService.updatePassword(params)
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }
}
