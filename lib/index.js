"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSD = exports.CFDIv4 = exports.FacturamaSDK = void 0;
const facturama_1 = __importDefault(require("./facturama"));
exports.FacturamaSDK = facturama_1.default;
const CFDI_1 = require("./modules/CFDI");
Object.defineProperty(exports, "CFDIv4", { enumerable: true, get: function () { return CFDI_1.CFDIv4; } });
const CSD_1 = __importDefault(require("./modules/CSD/CSD"));
exports.CSD = CSD_1.default;
