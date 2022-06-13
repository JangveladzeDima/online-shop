import { Test } from '@nestjs/testing';
import { AuthService } from './jwt.service';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from '../jwt.module';

describe('validateUser', () => {
  let httpServer: any;
  let service: AuthService;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    service = moduleRef.get<AuthService>(AuthService);
  });

  let token = '';

  describe('generate access token', () => {
    it('should return a string', async () => {
      const res = await service.generateAccessToken(
        'example@gmail.com',
        'client',
      );
      token = res.access_token;
      expect(typeof res.access_token).toBe('string');
    });
  });

  it('should return error when token is invalid', async () => {
    const res = await service.validateJwt(token);

    expect(res.email).toBe('example@gmail.com');
    expect(res.role).toBe('client');
  });

  afterAll(async () => {
    await app.close();
  });
});
