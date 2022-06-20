import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { Otp, OtpEntity } from "../entity/otp.entity"
import { OtpRepository } from "./otp.repository"

@Module({
    imports: [MongooseModule.forFeature([{ name: Otp.name, schema: OtpEntity }])],
    providers: [OtpRepository],
    exports: [OtpRepository],
})
export class DatabaseModule {}
