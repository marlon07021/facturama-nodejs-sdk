import {HTTP_REQUEST_TYPE} from "./HttpRequestType";

export type RequestConfig = {
    type: HTTP_REQUEST_TYPE;
    path: string;
    data?: string;
    headers?: any;
}
