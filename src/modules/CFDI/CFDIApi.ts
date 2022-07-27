import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {RequestConfig} from "../../client/RequestConfig";
import {encodeParams} from "../../util/qs";
import {CFDIv4} from "./CFDI.v4";
import {HTTP_REQUEST_TYPE} from "../../client/HttpRequestType";

export default class CFDIApi {

    private _client: Client;

    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    public async Get(id: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `api-lite/cfdis/${id}`,
        })
    }

    public async List(params: any = {}): Promise<any> {

        let path = `api-lite/cfdis`;

        if (params)
            path = `api-lite/cfdis?${encodeParams(params)}`;

        return this._client.request(<RequestConfig>{
            path
        });
    }

    public async Create(cfdIv4: CFDIv4): Promise<any> {
        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.POST,
            path: `api-lite/2/cfdis`,
            data: JSON.stringify(cfdIv4.json()),
        });
    }

    public async Send(params?: any): Promise<any> {
        let path = `cfdi`;

        if (params)
            path = `cfdi?${encodeParams(params)}`;

        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.POST,
            path
        });
    }

    public async Cancel(params?: any): Promise<any> {
        let path = `api-lite/cfdis`;

        if (params)
            path = `api-lite/cfdis?${encodeParams(params)}`;

        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.DELETE,
            path
        });
    }

    public async Download(format: string, type: string, id: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `cfdi/${format}/${type}/${id}`,
        })
    }

    public async Acuse(format: string, type: string, id: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `acuse/${format}/${type}/${id}`,
        })
    }
}
