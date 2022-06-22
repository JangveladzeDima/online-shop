import { IProductFilter } from "src/interface/product-filter.interface"
import { IProductUpdate } from "src/interface/product.update.interface"
import { IProduct } from "src/interface/product.interface"

export interface IProductRepository {
    create(client: IProduct): Promise<IProduct>
    update(filter: IProductFilter, productUpdateParams: IProductUpdate): Promise<IProduct>
    getProduct(filter: IProductFilter): Promise<IProduct>
    deleteProduct(filter: IProductFilter): Promise<IProduct>
}
