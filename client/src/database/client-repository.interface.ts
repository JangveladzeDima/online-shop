import { IClientFilter } from "src/interface/client-filter.interface"
import { IClient } from "src/interface/client.interface"
import { IClientUpdate } from "src/interface/client.update.interface"

export interface IClientRepository {
    getClient(filter: IClientFilter): Promise<IClient>
    deleteClient(filter: IClientFilter): Promise<IClient>
    create(client: IClient): Promise<IClient>
    update(filter: IClientFilter, clientUpdateParams: IClientUpdate): Promise<IClient>
}
