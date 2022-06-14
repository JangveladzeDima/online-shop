import { Module } from "@nestjs/common"
import { ClientController } from "./controller/client.controller"
import { ProductController } from "./controller/product.controller"
import { ProductService } from "./service/product/product.service"
import { ClientService } from "./service/client/client.service"
import { ClientsModule, Transport } from "@nestjs/microservices"
import { AuthController } from "./controller/auth.controller"
import { AuthService } from "./service/auth/auth.service"

@Module({
    imports: [
        ClientsModule.register([
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
                name: "JWT_SERVICE",
                transport: Transport.RMQ,
                options: {
                    urls: ["amqp://guest:guest@localhost:5672"],
                    queue: "jwt_queue",
                    queueOptions: {
                        durable: false,
                    },
                },
            },
        ]),
    ],
    controllers: [ClientController, ProductController, AuthController],
    providers: [ClientService, ProductService, AuthService],
})
export class AppModule {}
