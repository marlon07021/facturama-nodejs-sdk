import { IExtranjero } from "../../../abstractions/retenciones/IReceptor";
export declare class Extranjero implements IExtranjero {
    NomDenRazSocR: string;
    NumRegIdTrib: string;
    constructor(extranjero: IExtranjero);
    json(): any;
}
