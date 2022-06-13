import { Inject, Injectable } from '@nestjs/common';
import { IClientRepository } from 'src/database/client-repository.interface';
import { IClientFilter } from 'src/interface/client-filter.interface';
import { ClientRepository } from 'src/database/client.repository';
import { IClient } from 'src/interface/client.interface';
import { IClientService } from "./client-service.interface";
import { ClientProxy, RpcException } from "@nestjs/microservices";

@Injectable()
export class ClientService implements IClientService {
    constructor(
        @Inject(ClientRepository) private readonly clientRepository: IClientRepository,
        @Inject('HASH_SERVICE') private readonly hashService: ClientProxy
    ) {
    }

    async getClient(filter: IClientFilter): Promise<IClient> {
        return this.clientRepository.getClient(filter);
    }

    async addClient(clientParams: IClient): Promise<IClient> {
        const client = await this.clientRepository.getClient({
            email: clientParams.email
        })
        if (client) {
            throw new RpcException({
                message: 'Email already exists',
                code: 406
            })
        }
        const newClient = await this.clientRepository.create(clientParams)
        return newClient
    }
}
