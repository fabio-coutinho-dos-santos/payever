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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("./schema/user.schema");
const bcrypt_1 = require("bcrypt");
const uuid_1 = require("uuid");
const users_repository_1 = require("./users.repository");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    constructor(usersRepository, usersModel) {
        this.usersRepository = usersRepository;
        this.usersModel = usersModel;
    }
    async paginate(options) {
        return await this.usersModel.paginate({}, options);
    }
    async getAll() {
        return await this.usersRepository.find();
    }
    async getById(uuid) {
        const user = await this.usersRepository.findOne({ userUuid: uuid });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async getByEmail(email) {
        const user = await this.usersRepository.findOne({ email });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async create(user) {
        try {
            let hashPassword = (0, bcrypt_1.hashSync)(user.password, 10);
            user.password = hashPassword;
            user.userUuid = (0, uuid_1.v4)();
            return await this.usersRepository.create(user);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException('Error on create a new user');
        }
    }
    async update(uuid, user) {
        const userStored = await this.getById(uuid);
        return await this.usersRepository.findOneAndUpdate({ _id: userStored._id }, user);
    }
    async delete(uuid) {
        const userStored = await this.getById(uuid);
        return await this.usersRepository.deleteMany({ _id: userStored._id });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map