"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLoggerService = void 0;
const common_1 = require("@nestjs/common");
const abstract_logger_1 = require("../abstract-logger");
let ConsoleLoggerService = class ConsoleLoggerService extends abstract_logger_1.AbstractLoggerService {
    error(msg) {
        console.error(msg);
    }
    info(msg) {
        console.info(msg);
    }
    warn(msg) {
        console.warn(msg);
    }
};
exports.ConsoleLoggerService = ConsoleLoggerService;
exports.ConsoleLoggerService = ConsoleLoggerService = __decorate([
    (0, common_1.Injectable)()
], ConsoleLoggerService);
//# sourceMappingURL=console-logger.service.js.map