"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retencion = exports.RetentionApi = void 0;
const RetentionApi_1 = __importDefault(require("./RetentionApi"));
exports.RetentionApi = RetentionApi_1.default;
const Retencion_1 = require("./Retencion");
Object.defineProperty(exports, "Retencion", { enumerable: true, get: function () { return Retencion_1.Retencion; } });
