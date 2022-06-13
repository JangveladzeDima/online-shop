import { Test } from '@nestjs/testing';
import { JwtController } from './jwt.controller';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from '../jwt.module';

describe('validateUser', () => {
  let httpServer: any;
  let controller: JwtController;
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
    httpServer = app.getHttpServer();
    controller = moduleRef.get<JwtController>(JwtController);
  });

  it('should return error when token is invalid', async () => {
    const res = await controller.getpayloadBytoken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGVAZ21haWwuY29tIiwicm9sZSI6InVzZXIifQ.E25da60F1x24NtZUTeiJ1FkPHhGYsf5sNE8zaUijum0',
    );

    expect(res.email).toBe('example@gmail.com');
    expect(res.role).toBe('user');
  });

  describe('generate access token', () => {
    it('should return a string', async () => {
      const res = await controller.generateAccessTokenByMailAndRole({
        email: 'example@gmail.com',
        role: 'user',
      });
      console.log(res);
      expect(typeof res.access_token).toBe('string');
    });
  });

  afterAll(async () => {
    await app.close();
  });
  
});
