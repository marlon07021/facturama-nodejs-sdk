"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionApi = exports.CFDIApi = exports.CFDIv4 = void 0;
const CFDI_v4_1 = require("./CFDI.v4");
Object.defineProperty(exports, "CFDIv4", { enumerable: true, get: function () { return CFDI_v4_1.CFDIv4; } });
const CFDIApi_1 = __importDefault(require("./CFDIApi"));
exports.CFDIApi = CFDIApi_1.default;
const RetentionApi_1 = __importDefault(require("./RetentionApi"));
exports.RetentionApi = RetentionApi_1.default;
