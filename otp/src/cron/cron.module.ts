import { Module } from "@nestjs/common"
import { CronService } from "./cron.service"
import { DatabaseModule } from "src/database/database.module"

@Module({
    imports: [DatabaseModule],
    providers: [CronService],
    exports: [CronService],
})
export class CronModule {}
