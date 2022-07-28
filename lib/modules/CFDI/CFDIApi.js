"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../client/Client");
const qs_1 = require("../../util/qs");
const HttpRequestType_1 = require("../../client/HttpRequestType");
class CFDIApi {
    _client;
    /**
     * CFDIApi Constructor
     * @param {ClientConfig} config
     * @return {CFDIApi}
     */
    constructor(config) {
        this._client = new Client_1.Client(config);
    }
    /**
     * Get CFDI by id
     * @param {string} id
     * @return {any}
     */
    async Get(id) {
        return this._client.request({
            path: `api-lite/cfdis/${id}`,
        });
    }
    /**
     * List CFDI by params
     * @param {any} params
     * @return {any}
     */
    async List(params = {}) {
        let path = `api-lite/cfdis`;
        if (params)
            path = `api-lite/cfdis?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            path
        });
    }
    /**
     * Create CFDI
     * @param {CFDIv4} cfdIv4
     * @return {any}
     */
    async Create(cfdIv4) {
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
            path: `api-lite/2/cfdis`,
            data: cfdIv4.json(),
        });
    }
    /**
     * Send CFDI
     * @param {any} params
     * @return {any}
     */
    async Send(params) {
        let path = `cfdi`;
        if (params)
            path = `cfdi?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
            path
        });
    }
    /**
     * Cancel CFDI
     * @param {any} params
     * @return {any}
     */
    async Cancel(params) {
        let path = `api-lite/cfdis`;
        if (params)
            path = `api-lite/cfdis?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.DELETE,
            path
        });
    }
    /**
     * Download CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    async Download(format, type, id) {
        return this._client.request({
            path: `cfdi/${format}/${type}/${id}`,
        });
    }
    /**
     * Acuse CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    async Acuse(format, type, id) {
        return this._client.request({
            path: `acuse/${format}/${type}/${id}`,
        });
    }
}
exports.default = CFDIApi;
