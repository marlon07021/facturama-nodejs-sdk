"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../client/Client");
const qs_1 = require("../../util/qs");
const HttpRequestType_1 = require("../../client/HttpRequestType");
class CSDApi {
    _client;
    /**
     * CSDApi Constructor
     * @param {ClientConfig} config
     * @return {CSDApi}
     */
    constructor(config) {
        this._client = new Client_1.Client(config);
    }
    /**
     * Get CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    async Get(rfc) {
        return this._client.request({
            path: `api-lite/csds/${rfc}`,
        });
    }
    /**
     * Get CSD by params
     * @param {any} params
     * @return {any}
     */
    async List(params) {
        let path = `api-lite/csds`;
        if (params)
            path = `api-lite/csds?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            path,
        });
    }
    /**
     * Create CSD
     * @param {CSDInterface} csd
     * @return {any}
     */
    async Create(csd) {
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
            path: `api-lite/csds`,
            data: csd.json(),
        });
    }
    /**
     * Update CSD by RFC
     * @param {string} rfc
     * @param {CSD} csd
     * @return {any}
     */
    async Update(rfc, csd) {
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.PUT,
            path: `api-lite/csds/${rfc}`,
            data: csd.json(),
        });
    }
    /**
     * Remove CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    async Remove(rfc) {
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.DELETE,
            path: `api-lite/csds/${rfc}`,
        });
    }
}
exports.default = CSDApi;
