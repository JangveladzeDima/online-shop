"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const common_1 = require("@nestjs/common");
const client_service_1 = require("../service/client/client.service");
const client_registration_dto_1 = require("../dto/client/client-registration.dto");
let ClientController = class ClientController {
    constructor(clientService) {
        this.clientService = clientService;
        this.logger = new common_1.Logger();
    }
    async clientRegistration(registrationParams) {
        try {
            const client = await this.clientService.create(registrationParams);
            return client;
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException(err.message, err.code);
        }
    }
};
__decorate([
    (0, common_1.Post)('/registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_registration_dto_1.ClientRegistrationDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "clientRegistration", null);
ClientController = __decorate([
    (0, common_1.Controller)('client'),
    __param(0, (0, common_1.Inject)(client_service_1.ClientService)),
    __metadata("design:paramtypes", [Object])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map