import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { OtpController } from "./controller/otp.controller"
import { OtpService } from "./service/otp.service"
import { ConfigModule } from "@nestjs/config"
import { HttpModule } from "@nestjs/axios"
import { DatabaseModule } from "./database/database.module"

@Module({
    imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.db_url), HttpModule, DatabaseModule],
    controllers: [OtpController],
    providers: [OtpService],
})
export class OtpModule {}
