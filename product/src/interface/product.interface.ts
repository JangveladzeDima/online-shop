export interface IProduct {
    id?: string
    barcode?: string
    name: string
    description: string
    quantity: number
    price: number
    discountID: number
    product_categoryID: string
    rating: string
    guarantee: string
    color: string
    properties: string
    created_at?: Date
    updated_at?: Date
    modified_at?: Date
}
