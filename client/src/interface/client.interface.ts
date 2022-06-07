export interface IClient {
    id?: string
    email: string
    phoneNumber: string
    firstname: string
    lastname: string
    password: string
    salt?: string
    created_at?: Date
    updated_at?: Date
}