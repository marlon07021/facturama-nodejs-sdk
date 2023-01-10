/**
 * Encode utf-8 string into base64 string
 * @param {string} text
 * @return {any}
 */
export const encodeBase64 = (text: string): string => Buffer.from(text, 'utf8').toString('base64');

/**
 * Decode from base64 string to utf-8 string
 * @param {string} encoded
 * @return {any}
 */
export const decodeBase64 = (encoded: string): string => Buffer.from(encoded, 'base64').toString('utf8');
