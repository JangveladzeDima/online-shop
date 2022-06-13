import { Module } from '@nestjs/common';
import { CryptoHashController } from './hash/controller/crypto-hash.controller';
import { CryptoHashService } from './hash/service/crypto-hash.service';

@Module({
    imports: [],
    controllers: [CryptoHashController],
    providers: [CryptoHashService],
})
export class CryptoHashModule {
}
