import { Logger } from "@nestjs/common";
import { IClientService } from "../service/client/client-service.interface";
import { ClientRegistrationDto } from "../dto/client/client-registration.dto";
import { IClient } from "../model/client.interface";
import { ClientUpdateDto } from "../dto/client/client-update.dto";
import { ClientFilterDto } from "../dto/client/client-filter.dto";
export declare class ClientController {
    private readonly clientService;
    logger: Logger;
    constructor(clientService: IClientService);
    clientRegistration(registrationParams: ClientRegistrationDto): Promise<IClient>;
    clientUpdate(filter: ClientFilterDto, updateParams: ClientUpdateDto): Promise<IClient>;
}
