import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2 as hash } from 'crypto';
import * as crypto from 'crypto';
import { promisify } from 'util';
import { ICryptoHashService } from './crypto-hash-service.interface';

@Injectable()
export class CryptoHashService implements ICryptoHashService {
  hash = promisify(hash);
  config = {
    keylen: 16,
    iterations: 1000,
    algorythm: 'sha256',
  };
  async generateHashAndSalt(
    text: string,
  ): Promise<{ hash: string; salt: string }> {
    const keylen = this.config.keylen;
    const iterations = this.config.iterations;
    const algorythm = this.config.algorythm;
    const salt = randomBytes(16).toString('hex');
    const hashedText = await this.hash(
      text,
      salt,
      iterations,
      keylen,
      algorythm,
    );
    return { hash: hashedText.toString('hex'), salt };
  }

  async generateHashBySalt(text, salt) {
    const hashString = await crypto.pbkdf2Sync(
      text,
      salt,
      this.config.iterations,
      this.config.keylen,
      this.config.algorythm,
    );
    return hashString.toString('hex');
  }
}
