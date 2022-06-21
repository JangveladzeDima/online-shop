import { IClient } from "src/interface/client.interface"
import { UpdateParams } from "src/interface/updateparams.interface"

export interface IOtpService {
    generateAndSendOtp(email: string): Promise<IClient>
    validateOtpAndUpdatePassword(params: UpdateParams): Promise<IClient>
}
