export interface IJwtService {
    generateAccessToken(email: string, role: string): Promise<{ access_token: string }>

    validateJwt(token: string): Promise<{ email: string; role: string }>
}
