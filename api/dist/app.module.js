"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const client_controller_1 = require("./controller/client.controller");
const product_controller_1 = require("./controller/product.controller");
const product_service_1 = require("./service/product/product.service");
const client_service_1 = require("./service/client/client.service");
const microservices_1 = require("@nestjs/microservices");
const auth_controller_1 = require("./controller/auth.controller");
const auth_service_1 = require("./service/auth/auth.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'CLIENT_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://guest:guest@localhost:5672'],
                        queue: 'client_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                },
                {
                    name: 'HASH_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://guest:guest@localhost:5672'],
                        queue: 'hash_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                },
                {
                    name: 'JWT_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://guest:guest@localhost:5672'],
                        queue: 'jwt_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                }
            ])
        ],
        controllers: [
            client_controller_1.ClientController,
            product_controller_1.ProductController,
            auth_controller_1.AuthController
        ],
        providers: [
            client_service_1.ClientService,
            product_service_1.ProductService,
            auth_service_1.AuthService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map