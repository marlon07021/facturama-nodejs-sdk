import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {encodeParams} from "../../util/qs";
import {CFDIv4} from "./CFDI.v4";
import {HTTP_REQUEST_TYPE} from "../../client/HttpRequestType";

export default class CFDIApi {

    private _client: Client;

    /**
     * CFDIApi Constructor
     * @param {ClientConfig} config
     * @return {CFDIApi}
     */
    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    /**
     * Get CFDI by id
     * @param {string} id
     * @return {any}
     */
    public async Get(id: string): Promise<any> {
        return this._client.request({
            path: `api-lite/cfdis/${id}`,
        })
    }

    /**
     * List CFDI by params
     * @param {any} params
     * @return {any}
     */
    public async List(params?: any): Promise<any> {

        let path = `api-lite/cfdis`;

        if (params)
            path = `api-lite/cfdis?${encodeParams(params)}`;

        return this._client.request({
            path
        });
    }

    /**
     * Create CFDI
     * @param {CFDIv4} cfdIv4
     * @return {any}
     */
    public async Create(cfdIv4: CFDIv4): Promise<any> {
        return this._client.request({
            type: HTTP_REQUEST_TYPE.POST,
            path: `api-lite/2/cfdis`,
            data: cfdIv4.json(),
        });
    }

    /**
     * Send CFDI
     * @param {any} params
     * @return {any}
     */
    public async Send(params?: any): Promise<any> {
        let path = `cfdi`;

        if (params)
            path = `cfdi?${encodeParams(params)}`;

        return this._client.request({
            type: HTTP_REQUEST_TYPE.POST,
            path
        });
    }

    /**
     * Cancel CFDI
     * @param {any} params
     * @return {any}
     */
    public async Cancel(params?: any): Promise<any> {
        let path = `api-lite/cfdis`;

        if (params)
            path = `api-lite/cfdis?${encodeParams(params)}`;

        return this._client.request({
            type: HTTP_REQUEST_TYPE.DELETE,
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

    public async Download(format: string, type: string, id: string): Promise<any> {
        return this._client.request({
            path: `cfdi/${format}/${type}/${id}`,
        })
    }

    /**
     * Acuse CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    public async Acuse(format: string, type: string, id: string): Promise<any> {
        return this._client.request({
            path: `acuse/${format}/${type}/${id}`,
        })
    }
}
