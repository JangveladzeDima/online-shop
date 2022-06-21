export interface IOtpFilter {
    id?: string
    email?: string
    code?: number
    expireIn?: { $lt: number }
}
