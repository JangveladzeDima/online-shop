import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { AuthService } from "./service/jwt.service"
import { ConfigModule } from "@nestjs/config"
import { JwtController } from "./controller/jwt.controller"

@Module({
    imports: [
        ConfigModule.forRoot(),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SEC,
            signOptions: { expiresIn: "4h" },
        }),
    ],
    providers: [AuthService],
    controllers: [JwtController],
})
export class AuthModule {}
