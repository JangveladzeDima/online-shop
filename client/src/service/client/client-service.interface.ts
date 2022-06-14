import { IClientFilter } from "src/interface/client-filter.interface"
import { IClient } from "src/interface/client.interface"
import { IClientUpdate } from "src/interface/client.update.interface"

export interface IClientService {
    getClient(filter: IClientFilter): Promise<IClient>
    deleteClient(filter: IClientFilter): Promise<IClient>
    addClient(clientParams: IClient): Promise<IClient>
    update(filter: IClientFilter, ClientUpdateParams: IClientUpdate): Promise<IClient>
}
