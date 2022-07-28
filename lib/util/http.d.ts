/**
 * Call a GET http request
 * @param {string} url
 * @param {any} headers
 * @param {AbortSignal} signal
 * @return {any}
 */
export declare const GET: (url?: string, headers?: any, signal?: AbortSignal) => Promise<any>;
/**
 * Call a POST http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export declare const POST: (url?: string, body?: any, headers?: any, signal?: AbortSignal) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * Call a PUT http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export declare const PUT: (url?: string, body?: any, headers?: any, signal?: AbortSignal) => Promise<import("axios").AxiosResponse<any, any>>;
/**
 * Call a DELETE http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export declare const DELETE: (url?: string, body?: any, headers?: any, signal?: AbortSignal) => Promise<import("axios").AxiosResponse<any, any>>;
