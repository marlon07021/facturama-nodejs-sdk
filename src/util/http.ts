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
): Promise<any> => {
  return axios.get(url, {
    headers,
    signal,
  });
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
  return axios.post(url, body, {
    headers,
    signal,
  });
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
  return axios.put(url, body, {
    headers,
    signal,
  });
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
  return axios.delete(url, {
    headers,
    data: body,
    signal,
  });
};
