"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSD = exports.CFDIv4 = exports.FacturamaSDK = void 0;
var facturama_1 = require("./facturama");
exports.FacturamaSDK = facturama_1.default;
var CFDI_1 = require("./modules/CFDI");
Object.defineProperty(exports, "CFDIv4", { enumerable: true, get: function () { return CFDI_1.CFDIv4; } });
var CSD_1 = require("./modules/CSD/CSD");
exports.CSD = CSD_1.default;
