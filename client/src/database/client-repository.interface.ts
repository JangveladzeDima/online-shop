import { IClientFilter } from "src/interface/client-filter.interface"
import { IClient } from "src/interface/client.interface"

export interface IClientRepository {
    getClient(filter: IClientFilter): Promise<IClient>
    deleteClient(filter: IClientFilter): Promise<IClient>
    create(client: IClient): Promise<IClient>
}
