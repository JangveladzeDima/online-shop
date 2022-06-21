import { Logger } from "@nestjs/common"
import { Injectable, Inject } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"
import { OtpRepository } from "src/database/otp.repository"

@Injectable()
export class CronService {
    constructor(@Inject(OtpRepository) private readonly otpRepository: OtpRepository) {}
    logger = new Logger(CronService.name)

    @Cron("* * * * *")
    async handleCron() {
        try {
            const currentTime = new Date().getTime()
            await this.otpRepository.deleteExpiredOtps({ expireIn: { $lt: currentTime } })
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }
}
