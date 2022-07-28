"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64 = exports.encodeBase64 = void 0;
/**
 * Encode utf-8 string into base64 string
 * @param {string} text
 * @return {any}
 */
const encodeBase64 = (text) => Buffer.from(text, 'utf8').toString('base64');
exports.encodeBase64 = encodeBase64;
/**
 * Decode from base64 string to utf-8 string
 * @param {string} encoded
 * @return {any}
 */
const decodeBase64 = (encoded) => Buffer.from(encoded, 'base64').toString('utf8');
exports.decodeBase64 = decodeBase64;
