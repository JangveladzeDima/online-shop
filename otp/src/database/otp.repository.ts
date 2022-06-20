import { Injectable } from "@nestjs/common"
import { Logger } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { IOtpFilter } from "src/interface/otp-filter.interface"
import { IOtpRepository } from "src/database/otp-repository.interface"
import { IOtp } from "src/interface/otp.interface"
import { Otp, OtpDocument } from "src/entity/otp.entity"

@Injectable()
export class OtpRepository implements IOtpRepository {
    logger = new Logger(OtpRepository.name)

    constructor(@InjectModel(Otp.name) private readonly otp: Model<OtpDocument>) {}
    async getOtp(filter: IOtpFilter): Promise<IOtp> {
        return this.otp.findOne(filter)
    }

    async create(data: IOtp): Promise<IOtp> {
        return this.otp.create(data)
    }
}
