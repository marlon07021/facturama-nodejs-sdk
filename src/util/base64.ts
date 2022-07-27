export const encodeBase64 = (text:string): string => Buffer.from(text, 'utf8').toString('base64');
export const decodeBase64 = (encoded: string): string => Buffer.from(encoded, 'base64').toString('utf8');
