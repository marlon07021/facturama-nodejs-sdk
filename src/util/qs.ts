export const encodeParams = (object: any): string =>
    Object.entries(object).map((i: any) =>[i[0],encodeURIComponent(i[1])].join("=")).join("&");
