export interface IOtp {
    email: string
    code: number
    expireIn: number
    createdAt?: string
    updatedAt?: string
}
