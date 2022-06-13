import { Logger } from "@nestjs/common";
import { IClientService } from "../service/client/client-service.interface";
import { ClientRegistrationDto } from "../dto/client/client-registration.dto";
import { IClient } from "../model/client.interface";
export declare class ClientController {
    private readonly clientService;
    logger: Logger;
    constructor(clientService: IClientService);
    clientRegistration(registrationParams: ClientRegistrationDto): Promise<IClient>;
}
