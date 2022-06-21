export interface IOtpFilter {
    email?: string
    code?: number
    expireIn?: { $lt: number }
}
