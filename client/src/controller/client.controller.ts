import { Controller, Inject, Logger } from "@nestjs/common"
import { IClientService } from "../service/client/client-service.interface"
import { IClientFilter } from "src/interface/client-filter.interface"
import { MessagePattern, Payload } from "@nestjs/microservices"
import { ClientService } from "../service/client/client.service"
import { IClient } from "../interface/client.interface"
import { IClientUpdate } from "src/interface/client.update.interface"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

@Controller("client")
export class ClientController {
    logger = new Logger(ClientController.name)

    constructor(@Inject(ClientService) private readonly clientService: IClientService) {}

    @MessagePattern("get")
    async getClient(@Payload() filter: IClientFilter) {
        try {
            return this.clientService.getClient(filter)
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }

    @MessagePattern("add")
    async addClient(@Payload() clientParams: IClient) {
        try {
            const client = await this.clientService.addClient(clientParams)
            return client
        } catch (error) {
            this.logger.error(error.message)
            throw error
        }
    }

    @MessagePattern("delete")
    delete(@Payload() filter: IClientFilter) {
        try {
            return this.clientService.deleteClient(filter)
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
    @MessagePattern("update")
    update(@Payload("filter") filter: IClientFilter, @Payload("updateParams") clientParams: IClientUpdate) {
        try {
            return this.clientService.update(filter, clientParams)
        } catch (error) {
            this.logger.error(error)
            throw error
        }
    }
}
