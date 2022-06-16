import { Inject, Injectable, Logger } from "@nestjs/common"
import { IClientService } from "./client-service.interface"
import { IClient } from "../../model/client.interface"
import { ClientProxy } from "@nestjs/microservices"
import { first, firstValueFrom } from "rxjs"
import { IClientFilter } from "../../interface/client/client-filter.interface"
import { IClientUpdate } from "../../interface/client/client-update.interface"

@Injectable()
export class ClientService implements IClientService {
    logger = new Logger()

    constructor(@Inject("CLIENT_SERVICE") private readonly clientMicroservice: ClientProxy, @Inject("HASH_SERVICE") private readonly hashMicroservice: ClientProxy) {}

    async create(clientParams: IClient): Promise<IClient> {
        const { hash, salt } = await firstValueFrom(this.hashMicroservice.send("get-hash-and-salt-by-text", "dima"))
        const client: IClient = await firstValueFrom(
            this.clientMicroservice.send("add", {
                ...clientParams,
                password: hash,
                salt,
            }),
        )
        return client
    }

    async update(filter: IClientFilter, updatedParams: IClientUpdate): Promise<IClient> {
        const client: IClient = await firstValueFrom(
            this.clientMicroservice.send("update", {
                filter,
                updateParams: updatedParams,
            }),
        )
        return client
    }
}
