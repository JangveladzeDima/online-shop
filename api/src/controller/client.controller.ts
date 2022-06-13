import { Body, Controller, HttpException, Inject, Logger, Post } from "@nestjs/common";
import { ClientService } from "../service/client/client.service";
import { IClientService } from "../service/client/client-service.interface";
import { ClientRegistrationDto } from "../dto/client/client-registration.dto";
import { IClient } from "../model/client.interface";

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
    ): Promise<IClient> {
        try {
            const client = await this.clientService.create(registrationParams)
            return client
        } catch (err) {
            this.logger.error(err)
            throw new HttpException(err.message,err.code)
        }
    }
}