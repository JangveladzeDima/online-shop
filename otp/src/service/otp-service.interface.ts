import { IClient } from "src/interface/client.interface"
import { UpdateParams } from "src/interface/updateparams.interface"

export interface IOtpService {
    generateAndSendOtp(email: string): Promise<IClient>
    updatePassword(params: UpdateParams): Promise<IClient>
}
