"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64 = exports.encodeBase64 = void 0;
var encodeBase64 = function (text) { return Buffer.from(text, 'utf8').toString('base64'); };
exports.encodeBase64 = encodeBase64;
var decodeBase64 = function (encoded) { return Buffer.from(encoded, 'base64').toString('utf8'); };
exports.decodeBase64 = decodeBase64;
