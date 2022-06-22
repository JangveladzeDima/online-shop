import { Injectable, Logger } from "@nestjs/common"
import { IProductRepository } from "./product.repository.interface"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { IProduct } from "src/interface/product.interface"
import { IProductFilter } from "src/interface/product-filter.interface"
import { IProductUpdate } from "src/interface/product.update.interface"

@Injectable()
export class ProductRepository implements IProductRepository {
    logger = new Logger(ProductRepository.name)

    constructor(@InjectModel("product") private readonly product: Model<IProduct>) {}
    async create(product: IProduct): Promise<IProduct> {
        return this.product.create(product)
    }
    async update(filter: IProductFilter, productUpdateParams: IProductUpdate): Promise<IProduct> {
        return this.product.findOneAndUpdate(filter, productUpdateParams)
    }
    async getProduct(filter: IProductFilter): Promise<IProduct> {
        return this.product.findOne(filter)
    }
    async deleteProduct(filter: IProductFilter): Promise<IProduct> {
        return this.product.findOneAndDelete(filter)
    }
}
