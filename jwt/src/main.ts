import { NestFactory } from "@nestjs/core"
import { AuthModule } from "./jwt.module"
import { Transport } from "@nestjs/microservices"

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AuthModule, {
        transport: Transport.RMQ,
        options: {
            urls: ["amqp://guest:guest@localhost:5672"],
            queue: "jwt_queue",
            queueOptions: {
                durable: false,
            },
        },
    })
    await app.listen()
}

bootstrap()
