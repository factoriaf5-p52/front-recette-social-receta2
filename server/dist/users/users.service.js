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
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const mongoose_2 = require("mongoose");
const encrypt_service_1 = require("../tools/encrypt.service");
let UsersService = class UsersService {
    constructor(userModel, encryptService) {
        this.userModel = userModel;
        this.encryptService = encryptService;
    }
    async create(createUserDto) {
        const hashPassword = await this.encryptService.encrypt(createUserDto.password);
        createUserDto.password = hashPassword;
        return this.userModel.create(createUserDto);
    }
    async findAll(request) {
        return this.userModel
            .find(request.query)
            .setOptions({ sanitizeFilter: true })
            .exec();
    }
    async findOne(id) {
        return this.userModel.findOne({ _id: id }).exec();
    }
    async findOneByEmail(email) {
        return this.userModel.findOne({ email });
    }
    async update(id, updateUserDto) {
        return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
            new: true,
        });
    }
    async remove(id) {
        return this.userModel.findByIdAndRemove({ _id: id }).exec();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        encrypt_service_1.EncryptService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map