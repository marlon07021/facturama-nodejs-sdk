"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = exports.PUT = exports.POST = exports.GET = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Call a GET http request
 * @param {string} url
 * @param {any} headers
 * @param {AbortSignal} signal
 * @return {any}
 */
const GET = async (url = '', headers = {
    'Content-Type': 'application/json',
}, signal) => {
    const response = await (0, axios_1.default)({
        url,
        method: 'GET',
        headers,
        signal
    });
    return response.data;
};
exports.GET = GET;
/**
 * Call a POST http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
const POST = async (url = '', body = {}, headers = {
    'Content-Type': 'application/json',
}, signal) => {
    const response = await (0, axios_1.default)({
        url,
        method: 'POST',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};
exports.POST = POST;
/**
 * Call a PUT http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
const PUT = async (url = '', body = {}, headers = {
    'Content-Type': 'application/json',
}, signal) => {
    const response = await (0, axios_1.default)({
        url,
        method: 'PUT',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};
exports.PUT = PUT;
/**
 * Call a DELETE http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
const DELETE = async (url = '', body = {}, headers = {
    'Content-Type': 'application/json',
}, signal) => {
    const response = await (0, axios_1.default)({
        url,
        method: 'DELETE',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};
exports.DELETE = DELETE;
