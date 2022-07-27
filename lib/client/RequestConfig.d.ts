import { HTTP_REQUEST_TYPE } from "./HttpRequestType";
export declare type RequestConfig = {
    type: HTTP_REQUEST_TYPE;
    path: string;
    data?: string;
    headers?: any;
};
