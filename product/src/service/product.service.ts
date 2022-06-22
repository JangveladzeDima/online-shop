import { Inject, Injectable } from "@nestjs/common"
import { IProductRepository } from "src/database/product.repository.interface"
import { IProductFilter } from "src/interface/product-filter.interface"
import { ProductRepository } from "src/database/product.repository"
import { IProduct } from "src/interface/product.interface"
import { IProductService } from "./product-service.interface"
import { RpcException } from "@nestjs/microservices"
import { IProductUpdate } from "src/interface/product.update.interface"
// import { firstValueFrom } from "rxjs"

@Injectable()
export class ProductService implements IProductService {
    constructor(@Inject(ProductRepository) private readonly productRepository: IProductRepository) {}

    async getProduct(filter: IProductFilter): Promise<IProduct> {
        return this.productRepository.getProduct(filter)
    }

    async addProduct(productParams: IProduct): Promise<IProduct> {
        const product = await this.productRepository.getProduct({
            barcode: productParams.barcode,
        })
        if (product) {
            throw new RpcException({
                message: "Product already exists",
                code: 406,
            })
        }
        const newProduct = await this.productRepository.create(productParams)
        return newProduct
    }

    async update(filter: IProductFilter, productUpdateParams: IProductUpdate): Promise<IProduct> {
        const product = await this.productRepository.getProduct(filter)
        if (!product) {
            throw new RpcException({
                message: "Product not found",
                code: 404,
            })
        }

        return this.productRepository.update(filter, {
            ...productUpdateParams,
        })
    }
    async deleteProduct(filter: IProductFilter): Promise<IProduct> {
        return this.productRepository.deleteProduct(filter)
    }
}
