import { Module } from "@nestjs/common"
import { ProductController } from "./controller/product.controller"
import { MongooseModule } from "@nestjs/mongoose"
import { DatabaseModule } from "./database/database.module"
import { ProductService } from "./service/product.service"
import { ClientsModule, Transport } from "@nestjs/microservices"

const db_url = "mongodb+srv://JD07:dikadika007@database.weqvd.mongodb.net/online-shop?retryWrites=true&w=majority"

@Module({
    imports: [
        MongooseModule.forRoot(db_url),
        DatabaseModule,
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
        ]),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class AppModule {}
