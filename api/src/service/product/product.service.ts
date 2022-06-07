import { Injectable } from "@nestjs/common";
import { IProductService } from "./product-service.interface";

@Injectable()
export class ProductService implements IProductService {

}