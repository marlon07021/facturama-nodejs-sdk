import { HTTP_REQUEST_TYPE } from "./HttpRequestType";
/**
 * HTTP request configuration
 */
export declare type RequestConfig = {
    type?: HTTP_REQUEST_TYPE;
    path: string;
    data?: any;
    headers?: any;
};
