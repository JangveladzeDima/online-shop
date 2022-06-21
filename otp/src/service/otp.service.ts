import { Inject, Injectable } from "@nestjs/common"
import { IOtpService } from "./otp-service.interface"
import { HttpService } from "@nestjs/axios"
import { firstValueFrom } from "rxjs"
import { OtpRepository } from "src/database/otp.repository"
import { ClientProxy, RpcException } from "@nestjs/microservices"
import { UpdateParams } from "../interface/updateparams.interface"
import { IClient } from "../interface/client.interface"

@Injectable()
export class OtpService implements IOtpService {
    constructor(
        @Inject(OtpRepository) private readonly otpRepository: OtpRepository,
        private readonly httpService: HttpService,
        @Inject("CLIENT_SERVICE") private readonly clientService: ClientProxy,
        @Inject("HASH_SERVICE") private readonly hashService: ClientProxy,
    ) {}
    async generateAndSendOtp(email): Promise<IClient> {
        const client = await firstValueFrom(this.clientService.send("get", { email: email }))

        if (client) {
            const otpcode = Math.floor(Math.random() * 90000) + 10000
            const saveOtpData = await this.otpRepository.create({
                email: email,
                code: otpcode,
                expireIn: new Date().getTime() + 600,
            })

            const sendEmail = await firstValueFrom(
                this.httpService.post(process.env.SES, {
                    mail: email,
                    otp: otpcode,
                }),
            )

            return client
        } else {
            throw new RpcException({
                message: "Client not found",
                code: 404,
            })
        }
    }

    async updatePassword(params: UpdateParams): Promise<IClient> {
        const data = await this.otpRepository.get({
            email: params.email,
            code: params.otpcode,
        })
        if (data) {
            return firstValueFrom(
                this.clientService.send("update", {
                    filter: { email: params.email },
                    updateParams: { password: params.password },
                }),
            )
        } else {
            throw new RpcException({
                message: "Invalid OTP. Please check your code and try again.",
                code: 410,
            })
        }
    }
}
