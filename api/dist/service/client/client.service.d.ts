import { Logger } from "@nestjs/common";
import { IClientService } from "./client-service.interface";
import { IClient } from "../../model/client.interface";
import { ClientProxy } from "@nestjs/microservices";
import { IClientFilter } from "../../interface/client/client-filter.interface";
import { IClientUpdate } from "../../interface/client/client-update.interface";
export declare class ClientService implements IClientService {
    private readonly clientMicroservice;
    private readonly hashMicroservice;
    logger: Logger;
    constructor(clientMicroservice: ClientProxy, hashMicroservice: ClientProxy);
    create(clientParams: IClient): Promise<IClient>;
    update(filter: IClientFilter, updatedParams: IClientUpdate): Promise<IClient>;
}
