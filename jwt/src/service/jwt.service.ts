import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from '../interface/payload.interface';
import { IJwtService } from './jwt-service.interface';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService implements IJwtService {
  constructor(private readonly jwtService: JwtService) {}
  async generateAccessToken(email, role) {
    const payload: JWTPayload = { email, role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateJwt(token) {
    const payload = jwt.verify(token, process.env.JWT_SEC) as JWTPayload;
    return payload;
  }
}
