import { Controller, Inject, Logger } from "@nestjs/common"
import { IProductService } from "src/service/product-service.interface"
import { IProductFilter } from "src/interface/product-filter.interface"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { ProductService } from "src/service/product.service"
import { IProduct } from "src/interface/product.interface"
import { IProductUpdate } from "src/interface/product.update.interface"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

@Controller("product")
export class ProductController {
    logger = new Logger(ProductController.name)

    constructor(@Inject(ProductService) private readonly productService: IProductService) {}

    @MessagePattern("get")
    async getProduct(@Payload() filter: IProductFilter) {
        try {
            return this.productService.getProduct(filter)
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }

    @MessagePattern("add")
    async addProduct(@Payload() productParams: IProduct) {
        try {
            const product = await this.productService.addProduct(productParams)
            return product
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }

    @MessagePattern("delete")
    delete(@Payload() filter: IProductFilter) {
        try {
            return this.productService.deleteProduct(filter)
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
    @MessagePattern("update")
    update(@Payload("filter") filter: IProductFilter, @Payload("updateParams") productParams: IProductUpdate) {
        try {
            return this.productService.update(filter, productParams)
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
