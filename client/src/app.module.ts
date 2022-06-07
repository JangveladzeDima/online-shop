import { Module } from '@nestjs/common';
import { ClientController } from "./controller/client.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { DatabaseModule } from "./database/database.module";
import { ClientService } from "./service/client.service";

const db_url = 'mongodb+srv://JD07:dikadika007@database.weqvd.mongodb.net/online-shop?retryWrites=true&w=majority'

@Module({
    imports: [
        MongooseModule.forRoot(db_url),
        DatabaseModule
    ],
    controllers: [ClientController],
    providers: [ClientService],
})
export class AppModule {
}
