import { IClient } from "../../model/client.interface";
import { IClientFilter } from "../../interface/client/client-filter.interface";
import { IClientUpdate } from "../../interface/client/client-update.interface";
export interface IClientService {
    create(clientParams: IClient): Promise<IClient>;
    update(filter: IClientFilter, updatedParams: IClientUpdate): Promise<IClient>;
}
