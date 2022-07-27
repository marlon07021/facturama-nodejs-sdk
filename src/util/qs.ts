/**
 * Encode http request params into url friendly string
 * @param {any} object
 * @return {string}
 */
export const encodeParams = (object: any): string =>
    Object.entries(object).map((i: any) =>[i[0],encodeURIComponent(i[1])].join("=")).join("&");
