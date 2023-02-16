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
exports.MenuSchema = exports.Menu = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Menu = class Menu {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Menu.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Menu.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Menu.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: "User" }),
    __metadata("design:type", Object)
], Menu.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.default.Schema.Types.ObjectId, ref: "Recipe" }]),
    __metadata("design:type", Array)
], Menu.prototype, "recipes", void 0);
Menu = __decorate([
    (0, mongoose_1.Schema)()
], Menu);
exports.Menu = Menu;
exports.MenuSchema = mongoose_1.SchemaFactory.createForClass(Menu);
//# sourceMappingURL=menu.schema.js.map