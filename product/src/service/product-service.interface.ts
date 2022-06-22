import { IProductFilter } from "src/interface/product-filter.interface"
import { IProduct } from "src/interface/product.interface"
import { IProductUpdate } from "src/interface/product.update.interface"

export interface IProductService {
    getProduct(filter: IProductFilter): Promise<IProduct>

    deleteProduct(filter: IProductFilter): Promise<IProduct>

    addProduct(clientParams: IProduct): Promise<IProduct>

    update(filter: IProductFilter, productUpdateParams: IProductUpdate): Promise<IProduct>
}
