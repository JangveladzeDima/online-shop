import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClientEntity } from "../entity/client/client.entity";
import { ClientRepository } from "./client.repository";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'client', schema: ClientEntity }])],
    providers: [ClientRepository],
    exports: [ClientRepository]
})
export class DatabaseModule {
}