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
    return axios_1.default.get(url, {
        headers,
        signal,
    });
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
    return axios_1.default.post(url, body, {
        headers,
        signal,
    });
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
    return axios_1.default.put(url, body, {
        headers,
        signal,
    });
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
    return axios_1.default.delete(url, {
        headers,
        data: body,
        signal,
    });
};
exports.DELETE = DELETE;
