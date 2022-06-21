import { NestFactory } from "@nestjs/core"
import { OtpModule } from "./otp.module"
import { Transport } from "@nestjs/microservices"

async function bootstrap() {
    const app = await NestFactory.createMicroservice(OtpModule, {
        logger: ["log", "error"],
        transport: Transport.RMQ,
        options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "otp_queue",
            queueOptions: {
                durable: false,
            },
        },
    })
    await app.listen()
}

bootstrap()
