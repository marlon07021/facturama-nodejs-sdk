import fetch from 'node-fetch';

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
    const response = await fetch(url, {
        method: 'GET',
        headers,
        signal,
    });
    return response.json();
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
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
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
    const response = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
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
    const response = await fetch(url, {
        method: 'DELETE',
        headers,
        body: JSON.stringify(body),
        signal,
    });
    return response.json();
};

