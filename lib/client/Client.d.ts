import { ClientConfig } from "./ClientConfig";
import { RequestConfig } from "./RequestConfig";
/**
 * Major proxy wrapper for HTTP calls
 */
export declare class Client {
    private _config;
    /**
     * Constructor
     * @param {ClientConfig} config
     * @return {Client}
     */
    constructor(config: ClientConfig);
    /**
     * Performs and HTTP request with configuration
     * @param {RequestConfig} request
     * @return {any}
     */
    request(request: RequestConfig): Promise<any>;
}
