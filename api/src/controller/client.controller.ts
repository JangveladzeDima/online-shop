import { Body, Controller, Inject, Logger, Post } from "@nestjs/common";
import { ClientService } from "../service/client/client.service";
import { IClientService } from "../service/client/client-service.interface";
import { ClientRegistrationDto } from "../dto/client/client-registration.dto";

@Controller('client')
export class ClientController {
    logger = new Logger()

    constructor(
        @Inject(ClientService) private readonly clientService: IClientService
    ) {
    }

    @Post('/registration')
    async clientRegistration(
        @Body() registrationParams: ClientRegistrationDto
    ) {
        try {

        } catch (err) {
            this.logger.error(err.message)
            throw err
        }
    }
}