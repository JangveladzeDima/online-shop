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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRegistrationDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ClientRegistrationDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'Client Email' }),
    __metadata("design:type", String)
], ClientRegistrationDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)(),
    (0, swagger_1.ApiProperty)({ type: String, description: 'Client Phone Number' }),
    __metadata("design:type", String)
], ClientRegistrationDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({ type: String, description: 'Client Firstname' }),
    __metadata("design:type", String)
], ClientRegistrationDto.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(40),
    (0, class_validator_1.MinLength)(2),
    (0, swagger_1.ApiProperty)({ type: String, description: 'Client lastname' }),
    __metadata("design:type", String)
], ClientRegistrationDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.MinLength)(4),
    (0, swagger_1.ApiProperty)({ type: String, description: 'Client Password' }),
    __metadata("design:type", String)
], ClientRegistrationDto.prototype, "password", void 0);
exports.ClientRegistrationDto = ClientRegistrationDto;
//# sourceMappingURL=client-registration.dto.js.map