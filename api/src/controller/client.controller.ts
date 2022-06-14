import { Body, Controller, HttpException, Inject, Logger, Post } from "@nestjs/common";
import { ClientService } from "../service/client/client.service";
import { IClientService } from "../service/client/client-service.interface";
import { ClientRegistrationDto } from "../dto/client/client-registration.dto";
import { IClient } from "../model/client.interface";
import { ApiBadGatewayResponse, ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { Client } from "../dto/client/client.dto";

@Controller('client')
@ApiTags('client')
export class ClientController {
    logger = new Logger()

    constructor(
        @Inject(ClientService) private readonly clientService: IClientService
    ) {
    }

    @Post('/registration')
    @ApiCreatedResponse({
        description: 'Client Create',
        type: Client
    })
    @ApiBadGatewayResponse({
        description: 'Client Email Already Exists'
    })
    @ApiBody({ type: ClientRegistrationDto })
    async clientRegistration(
        @Body() registrationParams: ClientRegistrationDto
    ): Promise<IClient> {
        try {
            const client = await this.clientService.create(registrationParams)
            return client
        } catch (err) {
            this.logger.error(err)
            throw new HttpException(err.message, err.code)
        }
    }
}