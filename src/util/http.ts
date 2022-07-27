import axios from 'axios';

/**
 * Call a GET http request
 * @param {string} url
 * @param {any} headers
 * @param {AbortSignal} signal
 * @return {any}
 */
export const GET = async (
    url: string = '',
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await axios({
        url,
        method: 'GET',
        headers,
        signal
    });
    return response.data;
};

/**
 * Call a POST http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export const POST = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await axios({
        url,
        method: 'POST',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};

/**
 * Call a PUT http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export const PUT = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await axios({
        url,
        method: 'PUT',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};

/**
 * Call a DELETE http request
 * @param {string} url
 * @param {any} headers
 * @param {any} body
 * @param {AbortSignal} signal
 * @return {any}
 */
export const DELETE = async (
    url: string = '',
    body: any = {},
    headers: any = {
        'Content-Type': 'application/json',
    },
    signal?: AbortSignal,
) => {
    const response = await axios( {
        url,
        method: 'DELETE',
        headers,
        data: JSON.stringify(body),
        signal,
    });
    return response.data;
};

