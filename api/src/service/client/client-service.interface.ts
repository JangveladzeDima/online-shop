import { IClient } from "../../model/client.interface";

export interface IClientService {
    create(clientParams: IClient): Promise<IClient>
}