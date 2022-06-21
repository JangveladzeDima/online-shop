import { IOtpFilter } from "src/interface/otp-filter.interface"
import { IOtp } from "src/interface/otp.interface"

export interface IOtpRepository {
    create(data: IOtp): Promise<IOtp>
    get(filter: IOtpFilter): Promise<IOtp>
}
