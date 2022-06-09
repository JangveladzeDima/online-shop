import { Controller, Inject, Injectable, Logger } from '@nestjs/common';
import { CryptoHashService } from '../service/crypto-hash.service';
import { ICryptoHashService } from '../service/crypto-hash-service.interface';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('')
export class CryptoHashController {
  logger = new Logger(CryptoHashController.name);

  constructor(
    @Inject(CryptoHashService)
    private readonly cryptoHashService: ICryptoHashService,
  ) {}

  @MessagePattern('get-hash-and-salt-by-text')
  async getHashAndSaltByText(@Payload() text: string) {
    try {
      return this.cryptoHashService.generateHashAndSalt(text);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
  @MessagePattern('get-hash-by-salt')
  async getHashBySalt(@Payload() text: string, salt: string) {
    try {
      return this.cryptoHashService.generateHashBySalt(text, salt);
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}