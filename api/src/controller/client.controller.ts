import { Body, Controller, HttpException, Inject, Logger, Post, Put, Query } from "@nestjs/common"
import { ClientService } from "../service/client/client.service"
import { IClientService } from "../service/client/client-service.interface"
import { ClientRegistrationDto } from "../dto/client/client-registration.dto"
import { IClient } from "../model/client.interface"
import { ApiAcceptedResponse, ApiBadGatewayResponse, ApiBody, ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { Client } from "../dto/client/client.dto"
import { ClientUpdateDto } from "../dto/client/client-update.dto"
import { ClientFilterDto } from "../dto/client/client-filter.dto"

@Controller("client")
@ApiTags("client")
export class ClientController {
    logger = new Logger()

    constructor(@Inject(ClientService) private readonly clientService: IClientService) {}

    @Post("/registration")
    @ApiCreatedResponse({
        description: "Client Create",
        type: Client,
    })
    @ApiBadGatewayResponse({
        description: "Client Email Already Exists",
    })
    @ApiBody({ type: ClientRegistrationDto })
    async clientRegistration(@Body() registrationParams: ClientRegistrationDto): Promise<IClient> {
        try {
            const client = await this.clientService.create(registrationParams)
            return client
        } catch (err) {
            this.logger.error(err)
            throw new HttpException(err.message, err.code)
        }
    }

    @ApiAcceptedResponse({
        description: "Client Updated",
        type: Client,
    })
    @ApiBadGatewayResponse({
        description: "Client Dont Exists",
    })
    @Put("/update")
    async clientUpdate(@Query() filter: ClientFilterDto, @Body() updateParams: ClientUpdateDto): Promise<IClient> {
        try {
            const client = await this.clientService.update(filter, updateParams)
            return client
        } catch (err) {
            this.logger.error(err)
            throw new HttpException(err.message, err.code)
        }
    }
}
