"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../client/Client");
const qs_1 = require("../../util/qs");
const HttpRequestType_1 = require("../../client/HttpRequestType");
class RetentionApi {
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
            path: `Retenciones/${id}`,
        });
    }
    /**
     * List CFDI by params
     * @param {any} params
     * @return {any}
     */
    async List(params) {
        let path = `Retenciones`;
        if (params)
            path = `Retenciones?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            path
        });
    }
    /**
     * Create Retencion
     * @param {Retencion} retencion
     * @return {any}
     */
    async Create(retencion) {
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
            path: `Retenciones`,
            data: retencion.json(),
        });
    }
    /**
     * Send Retencion by email
     * @param {any} params
     * @return {any}
     */
    async Send(params) {
        let path = `Retenciones`;
        if (params)
            path = `Retenciones?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
            path
        });
    }
    /**
     * Cancel Retencion
     * @param {any} params
     * @return {any}
     */
    async Cancel(params) {
        let path = `Retenciones`;
        if (params)
            path = `Retenciones?${(0, qs_1.encodeParams)(params)}`;
        return this._client.request({
            type: HttpRequestType_1.HTTP_REQUEST_TYPE.DELETE,
            path
        });
    }
    /**
     * Download Retencion
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    async Download(format, type, id) {
        return this._client.request({
            path: `Retenciones/${id}/${format}`,
        });
    }
}
exports.default = RetentionApi;
