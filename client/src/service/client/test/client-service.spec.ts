import { ClientService } from "../client.service"
import { Test, TestingModule } from "@nestjs/testing"
import { ClientRepository } from "../../../database/client.repository"
import { ClientsModule, Transport } from "@nestjs/microservices"
import { IClient } from "../../../interface/client.interface"
import { clientFirstnameUpdateStab, clientStub } from "../../../../test/stubs/client-service.spec.stubs"

let clients: IClient[] = []
describe("test client service", () => {
    let service: ClientService
    const mockUserRepository = {
        getClient: jest.fn(filter => {
            for (let client of clients) {
                let ind = 0
                for (let value in filter) {
                    if (client[value] !== filter[value]) {
                        ind = 1
                        break
                    }
                }
                if (ind === 0) {
                    return client
                }
            }
            return null
        }),
        create: jest.fn(client => {
            clients.push(client)
            return client
        }),
        deleteClient: jest.fn(filter => {
            let index = 0
            let needClient = {}
            for (let client of clients) {
                let ind = 0
                for (let value in filter) {
                    if (client[value] !== filter[value]) {
                        ind = 1
                        break
                    }
                }
                if (ind === 0) {
                    needClient = client
                    clients.splice(index, 1)
                    return needClient
                }
                index += 1
            }
        }),
        update: jest.fn(params => {
            console.log(params);
            let index = 0
            let needClient = {}
            // for (let client of clients) {
            //     let ind = 0
            //     for (let value in filter) {
            //         if (client[value] !== filter[value]) {
            //             ind = 1
            //             break
            //         }
            //     }
            //     if (ind === 0) {
            //         needClient = client
            //         clients.splice(index, 1)
            //         return needClient
            //     }
            //     index += 1
            // }
        }),
    }
    const mockHashService = {
        'get-hash-and-salt-by-text': jest.fn(params => {
            console.log(params)
        })
    }
    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ClientsModule.register([
                    {
                        name: "HASH_SERVICE",
                        transport: Transport.RMQ,
                        options: {
                            urls: ["amqp://guest:guest@localhost:5672"],
                            queue: "hash_queue",
                            queueOptions: {
                                durable: false,
                            },
                        },
                    },
                ]),
            ],
            providers: [ClientService, ClientRepository],
        })
            .overrideProvider("HASH_SERVICE")
            .useValue(mockHashService)
            .overrideProvider(ClientRepository)
            .useValue(mockUserRepository)
            .compile()
        service = module.get<ClientService>(ClientService)
        const client = await service.addClient(clientStub)
        for (let value in clientStub) {
            expect(client[value]).toEqual(clientStub[value])
        }
    })
    describe("success tests", () => {
        it("add client - should return added client", async () => {
            const client = await service.addClient(clientStub)
            for (let value in clientStub) {
                expect(client[value]).toEqual(clientStub[value])
            }
        })
        it("get client - should return client", async () => {
            const client = await service.getClient({
                email: clientStub.email,
            })
            expect(client).toBeDefined()
            for (let value in clientStub) {
                expect(client[value]).toEqual(clientStub[value])
            }
        })
        it("delete client  - Should return deleted client", async () => {
            const client = await service.deleteClient({
                email: clientStub.email,
            })
            const getClient = await service.getClient({
                email: client.email,
            })
            expect(getClient).toEqual(null)
        })
        it("update client - should return updated client", async () => {
            await service.addClient(clientStub)
            const updateClient = await service.update({ email: clientStub.email }, clientFirstnameUpdateStab)
            console.log(updateClient)
        })
    })
    describe("failed tests", () => {
        it("add client - should return error {repeat email}", async () => {
            service.addClient(clientStub).catch(err => {
                expect(err.message).toStrictEqual("Email already exists")
                expect(err.error.code).toStrictEqual(406)
            })
        })
        it("get client - should return null", async () => {
            const client = await service.getClient({ email: "123" })
            expect(client).toEqual(null)
        })
    })
    beforeAll(() => {
        clients = []
    })
})
