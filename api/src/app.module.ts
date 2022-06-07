import { Module } from '@nestjs/common';
import { ClientController } from "./controller/client.controller";
import { ProductController } from "./controller/product.controller";
import { ProductService } from "./service/product/product.service";
import { ClientService } from "./service/client/client.service";

@Module({
    imports: [],
    controllers: [ClientController, ProductController],
    providers: [ClientService, ProductService],
})
export class AppModule {
}
