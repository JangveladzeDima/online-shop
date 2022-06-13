import { Inject, Injectable } from '@nestjs/common';
import { IClientRepository } from 'src/database/client-repository.interface';
import { IClientFilter } from 'src/interface/client-filter.interface';
import { ClientRepository } from 'src/database/client.repository';
import { IClient } from 'src/interface/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @Inject(ClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  async getClient(filter: IClientFilter): Promise<IClient> {
    return this.clientRepository.getClient(filter);
  }
}
