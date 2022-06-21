import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { OtpController } from "./controller/otp.controller"
import { OtpService } from "./service/otp.service"
import { ConfigModule } from "@nestjs/config"
import { HttpModule } from "@nestjs/axios"
import { DatabaseModule } from "./database/database.module"
import { CronModule } from "./cron/cron.module"
import { ClientsModule, Transport } from "@nestjs/microservices"
import { ScheduleModule } from "@nestjs/schedule"

@Module({
    imports: [
        ClientsModule.register([
            {
                name: "HASH_SERVICE",
                transport: Transport.RMQ,
                options: {
                    urls: ["amqp://guest:guest@localhost:5672"],
                    queue: "hash_queue",
                    queueOptions: {
                        durable: false,
                    },
                },
            },
            {
                name: "CLIENT_SERVICE",
                transport: Transport.RMQ,
                options: {
                    urls: ["amqp://guest:guest@localhost:5672"],
                    queue: "client_queue",
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
        ConfigModule.forRoot(),
        ScheduleModule.forRoot(),
        MongooseModule.forRoot(process.env.db_url),
        CronModule,
        HttpModule,
        DatabaseModule,
    ],
    controllers: [OtpController],
    providers: [OtpService],
})
export class OtpModule {}
