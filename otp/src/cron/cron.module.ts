import { Module, forwardRef } from "@nestjs/common"
import { TasksService } from "./cron.service"
import { OtpModule } from "../otp.module"

@Module({
    imports: [forwardRef(() => OtpModule)],
    providers: [TasksService],
})
export class TasksModule {}
