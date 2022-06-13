import { Logger } from "@nestjs/common";
import { IClientService } from "./client-service.interface";
import { IClient } from "../../model/client.interface";
import { ClientProxy } from "@nestjs/microservices";
export declare class ClientService implements IClientService {
    private readonly clientMicroservice;
    private readonly hashService;
    logger: Logger;
    constructor(clientMicroservice: ClientProxy, hashService: ClientProxy);
    create(clientParams: IClient): Promise<IClient>;
}
