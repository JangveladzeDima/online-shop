import { IClientFilter } from 'src/interface/client-filter.interface';
import { IClient } from 'src/interface/client.interface';

export interface IClientService {
    getClient(filter: IClientFilter): Promise<IClient>

    addClient(clientParams: IClient): Promise<IClient>
}