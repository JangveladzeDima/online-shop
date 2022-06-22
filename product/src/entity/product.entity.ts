import { Schema } from "mongoose"

export const ProductEntity = new Schema({
    barcode: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountID: {
        type: Number,
    },
    product_categoryID: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    guarantee: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },

    properties: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
    },
    updated_at: {
        type: Date,
    },
    modified_at: {
        type: Date,
    },
})
