"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const http_1 = require("../util/http");
const HttpRequestType_1 = require("./HttpRequestType");
/**
 * Major proxy wrapper for HTTP calls
 */
class Client {
    _config;
    /**
     * Constructor
     * @param {ClientConfig} config
     * @return {Client}
     */
    constructor(config) {
        this._config = config;
    }
    /**
     * Performs and HTTP request with configuration
     * @param {RequestConfig} request
     * @return {any}
     */
    async request(request) {
        try {
            if (!request.type)
                request.type = HttpRequestType_1.HTTP_REQUEST_TYPE.GET;
            if (!request.headers)
                request.headers = {
                    'Content-Type': 'application/json',
                };
            if (this._config.authorization)
                request.headers.Authorization = this._config.authorization;
            if (request.type === HttpRequestType_1.HTTP_REQUEST_TYPE.GET) {
                return (0, http_1.GET)(this._config.url + request.path, request.headers);
            }
            else if (request.type === HttpRequestType_1.HTTP_REQUEST_TYPE.POST) {
                return (0, http_1.POST)(this._config.url + request.path, request.data, request.headers);
            }
            else if (request.type === HttpRequestType_1.HTTP_REQUEST_TYPE.PUT) {
                return (0, http_1.PUT)(this._config.url + request.path, request.data, request.headers);
            }
            else if (request.type === HttpRequestType_1.HTTP_REQUEST_TYPE.DELETE) {
                return (0, http_1.DELETE)(this._config.url + request.path, request.data, request.headers);
            }
        }
        catch (e) {
            return null;
        }
    }
}
exports.Client = Client;
