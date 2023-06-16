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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const show_user_swagger_1 = require("./swagger/show-user.swagger");
const create_user_swagger_1 = require("./swagger/create-user.swagger");
const update_user_swagger_1 = require("./swagger/update-user.swagger");
const bad_request_swagger_1 = require("./swagger/bad-request.swagger");
const not_found_swagger_1 = require("./swagger/not-found.swagger");
const http_exception_filters_1 = require("./filters/http-exception.filters");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll(page = 1, limit = 10) {
        return this.usersService.paginate({
            page: page,
            limit: limit,
            sort: { email: 1 },
        });
    }
    async getById(id) {
        return await this.usersService.getById(id);
    }
    async getByEmail(email) {
        return await this.usersService.getByEmail(email);
    }
    async create(body) {
        return await this.usersService.create(body);
    }
    async update(uuid, body) {
        return await this.usersService.update(uuid, body);
    }
    async delete(uuid) {
        return await this.usersService.delete(uuid);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Users' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get all Users',
        type: show_user_swagger_1.ShowUserSwagger,
        isArray: true
    }),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Get users by uuid' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: show_user_swagger_1.ShowUserSwagger }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found', type: not_found_swagger_1.NotFundSwagger }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    (0, swagger_1.ApiOperation)({ summary: 'Get users by email' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found', type: show_user_swagger_1.ShowUserSwagger }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found', type: not_found_swagger_1.NotFundSwagger }),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getByEmail", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created succesfully', type: create_user_swagger_1.CreateUserSwagger }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid Parameters', type: bad_request_swagger_1.BadRequestSwagger }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated succesfully', type: update_user_swagger_1.UpdateUserSwagger }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found', type: not_found_swagger_1.NotFundSwagger }),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'User deleted succesfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found', type: not_found_swagger_1.NotFundSwagger }),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
UsersController = __decorate([
    (0, common_1.Controller)('api/users'),
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.UseFilters)(http_exception_filters_1.HttpExceptionFilter),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map