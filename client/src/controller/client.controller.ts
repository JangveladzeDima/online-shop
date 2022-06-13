import { Controller, Get, Inject, Logger, Param } from '@nestjs/common';
import { IClientService } from '../service/client-service.interface';
import { IClientFilter } from 'src/interface/client-filter.interface';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('client')
export class ClientController {
  logger = new Logger(ClientController.name);

  constructor(private readonly clientService: IClientService) {}

  @MessagePattern('get')
  find(filter: IClientFilter) {
    try {
      return this.clientService.getClient(filter);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @MessagePattern('delete')
  delete(@Payload() filter: IClientFilter) {
    try {
      return this.clientService.deleteClient(filter);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
