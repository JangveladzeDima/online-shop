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
const swagger_1 = require("@nestjs/swagger");
const client_dto_1 = require("../dto/client/client.dto");
const client_update_dto_1 = require("../dto/client/client-update.dto");
const client_filter_dto_1 = require("../dto/client/client-filter.dto");
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
    async clientUpdate(filter, updateParams) {
        try {
            const client = await this.clientService.update(filter, updateParams);
            return client;
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException(err.message, err.code);
        }
    }
};
__decorate([
    (0, common_1.Post)("/registration"),
    (0, swagger_1.ApiCreatedResponse)({
        description: "Client Create",
        type: client_dto_1.Client,
    }),
    (0, swagger_1.ApiBadGatewayResponse)({
        description: "Client Email Already Exists",
    }),
    (0, swagger_1.ApiBody)({ type: client_registration_dto_1.ClientRegistrationDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_registration_dto_1.ClientRegistrationDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "clientRegistration", null);
__decorate([
    (0, swagger_1.ApiAcceptedResponse)({
        description: "Client Updated",
        type: client_dto_1.Client,
    }),
    (0, swagger_1.ApiBadGatewayResponse)({
        description: "Client Dont Exists",
    }),
    (0, common_1.Put)("/update"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [client_filter_dto_1.ClientFilterDto, client_update_dto_1.ClientUpdateDto]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "clientUpdate", null);
ClientController = __decorate([
    (0, common_1.Controller)("client"),
    (0, swagger_1.ApiTags)("client"),
    __param(0, (0, common_1.Inject)(client_service_1.ClientService)),
    __metadata("design:paramtypes", [Object])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map