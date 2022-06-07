import { Injectable, Logger } from "@nestjs/common";
import { IClientService } from "./client-service.interface";
import { IClient } from "../../model/client.interface";

@Injectable()
export class ClientService implements IClientService {
    logger = new Logger()

    async create(clientParams: IClient): Promise<IClient> {

    }
}