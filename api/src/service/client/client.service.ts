import { Inject, Injectable, Logger } from "@nestjs/common"
import { IClientService } from "./client-service.interface"
import { IClient } from "../../model/client.interface"
import { ClientProxy } from "@nestjs/microservices"
import { firstValueFrom } from "rxjs"

@Injectable()
export class ClientService implements IClientService {
    logger = new Logger()

    constructor(@Inject("CLIENT_SERVICE") private readonly clientMicroservice: ClientProxy, @Inject("HASH_SERVICE") private readonly hashService: ClientProxy) {}

    async create(clientParams: IClient): Promise<IClient> {
        const { hash, salt } = await firstValueFrom(this.hashService.send("get-hash-and-salt-by-text", "dima"))
        const client: IClient = await firstValueFrom(
            this.clientMicroservice.send("add", {
                ...clientParams,
                password: hash,
                salt,
            }),
        )
        return client
    }
}
