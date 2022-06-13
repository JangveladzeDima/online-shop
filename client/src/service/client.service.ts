import { Inject, Injectable } from '@nestjs/common';
import { IClientRepository } from 'src/database/client-repository.interface';
import { IClientFilter } from 'src/interface/client-filter.interface';
import { ClientRepository } from 'src/database/client.repository';
import { IClient } from 'src/interface/client.interface';
import { IClientService } from './client-service.interface';

@Injectable()
export class ClientService implements IClientService {
  constructor(
    @Inject(ClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  async getClient(filter: IClientFilter): Promise<IClient> {
    return this.clientRepository.getClient(filter);
  }
  deleteClient(filter: IClientFilter): Promise<IClient> {
    return this.clientRepository.deleteClient(filter);
  }
}
