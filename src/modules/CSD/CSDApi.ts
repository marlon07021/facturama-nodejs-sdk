import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {RequestConfig} from "../../client/RequestConfig";
import {encodeParams} from "../../util/qs";
import {HTTP_REQUEST_TYPE} from "../../client/HttpRequestType";
import CSD from "./CSD";

export default class CSDApi {

    private _client: Client;

    /**
     * CSDApi Constructor
     * @param {ClientConfig} config
     * @return {CSDApi}
     */
    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    /**
     * Get CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    public async Get(rfc: string): Promise<any> {
        return this._client.request({
            path: `api-lite/csds/${rfc}`,
        })
    }

    /**
     * Get CSD by params
     * @param {any} params
     * @return {any}
     */
    public async List(params: any = {}): Promise<any> {

        let path = `api-lite/csds`;

        if (params)
            path = `api-lite/csds?${encodeParams(params)}`;

        return this._client.request({
            path
        });
    }

    /**
     * Create CSD
     * @param {CSD} csd
     * @return {any}
     */
    public async Create(csd: CSD): Promise<any> {
        return this._client.request({
            type: HTTP_REQUEST_TYPE.POST,
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
    public async Update(rfc: string, csd: CSD): Promise<any> {
        return this._client.request({
            type: HTTP_REQUEST_TYPE.PUT,
            path: `api-lite/csds/${rfc}`,
            data: csd.json(),
        });
    }

    /**
     * Remove CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    public async Remove(rfc: string): Promise<any> {
        return this._client.request({
            type: HTTP_REQUEST_TYPE.DELETE,
            path: `api-lite/csds/${rfc}`
        });
    }
}
