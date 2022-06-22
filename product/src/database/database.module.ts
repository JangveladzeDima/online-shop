import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { ProductEntity } from "src/entity/product.entity"
import { ProductRepository } from "./product.repository"

@Module({
    imports: [MongooseModule.forFeature([{ name: "product", schema: ProductEntity }])],
    providers: [ProductRepository],
    exports: [ProductRepository],
})
export class DatabaseModule {}
