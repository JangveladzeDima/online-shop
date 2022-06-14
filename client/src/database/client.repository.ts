import { Injectable } from "@nestjs/common"
import { IClientRepository } from "./client-repository.interface"
import { Logger } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { IClient } from "src/interface/client.interface"
import { IClientFilter } from "src/interface/client-filter.interface"
import { IClientUpdate } from "src/interface/client.update.interface"

@Injectable()
export class ClientRepository implements IClientRepository {
    logger = new Logger(ClientRepository.name)

    constructor(@InjectModel("client") private readonly client: Model<IClient>) {}
    async getClient(filter: IClientFilter): Promise<IClient> {
        return this.client.findOne(filter)
    }
    async deleteClient(filter: IClientFilter): Promise<IClient> {
        return this.client.findOneAndDelete(filter)
    }
    async create(client: IClient): Promise<IClient> {
        return this.client.create(client)
    }
    async update(filter: IClientFilter, ClientUpdateParams: IClientUpdate): Promise<IClient> {
        return this.client.findOneAndUpdate(filter, ClientUpdateParams)
    }
}
