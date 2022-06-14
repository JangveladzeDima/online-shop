
export interface IClient {
    id?: string
    email: string
    password: string
    phoneNumber: string
    firstname: string
    lastname: string
    salt?: string
    role?: string
    created_at?: string
    updated_at?: string
}