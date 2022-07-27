import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {RequestConfig} from "../../client/RequestConfig";
import {encodeParams} from "../../util/qs";
import {HTTP_REQUEST_TYPE} from "../../client/HttpRequestType";
import CSD from "./CSD";

export default class CSDApi {

    private _client: Client;

    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    public async Get(rfc: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `api-lite/csds/${rfc}`,
        })
    }

    public async List(params: any = {}): Promise<any> {

        let path = `api-lite/csds`;

        if (params)
            path = `api-lite/csds?${encodeParams(params)}`;

        return this._client.request(<RequestConfig>{
            path
        });
    }

    public async Create(csd: CSD): Promise<any> {
        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.POST,
            path: `api-lite/csds`,
            data: JSON.stringify(csd.json()),
        });
    }

    public async Update(rfc: string, csd: CSD): Promise<any> {
        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.PUT,
            path: `api-lite/csds/${rfc}`,
            data: JSON.stringify(csd.json()),
        });
    }

    public async Remove(rfc: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            type: HTTP_REQUEST_TYPE.DELETE,
            path: `api-lite/csds/${rfc}`
        });
    }
}
