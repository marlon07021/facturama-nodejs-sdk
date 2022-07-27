import { ClientConfig } from "./ClientConfig";
import { RequestConfig } from "./RequestConfig";
export declare class Client {
    private _config;
    constructor(config: ClientConfig);
    request(request: RequestConfig): Promise<any>;
}
