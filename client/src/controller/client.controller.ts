import { Controller, Inject, Logger } from "@nestjs/common";
import { ClientService } from "../service/client.service";
import { IClientService } from "../service/client-service.interface";

@Controller('')
export class ClientController {
    logger = new Logger(ClientController.name)

    constructor(
        @Inject(ClientService) private readonly clientService: IClientService
    ) {
    }

}