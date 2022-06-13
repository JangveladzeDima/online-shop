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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let ClientService = class ClientService {
    constructor(clientMicroservice, hashService) {
        this.clientMicroservice = clientMicroservice;
        this.hashService = hashService;
        this.logger = new common_1.Logger();
    }
    async create(clientParams) {
        const { hash, salt } = await (0, rxjs_1.firstValueFrom)(this.hashService.send('get-hash-and-salt-by-text', "dima"));
        const client = await (0, rxjs_1.firstValueFrom)(this.clientMicroservice.send('add', Object.assign(Object.assign({}, clientParams), { password: hash, salt })));
        return client;
    }
};
ClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CLIENT_SERVICE')),
    __param(1, (0, common_1.Inject)('HASH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map