import { IReceptor } from "../../abstractions";
import { IExtranjero, INacional } from "../../abstractions/retenciones/IReceptor";
export declare class Nacional implements INacional {
    RfcRecep: string;
    NomDenRazSocR: string;
    CurpR: string;
    constructor(nacional: INacional);
    json(): any;
}
export declare class Extranjero implements IExtranjero {
    NomDenRazSocR: string;
    NumRegIdTrib: string;
    constructor(extranjero: IExtranjero);
    json(): any;
}
export default class Receptor implements IReceptor {
    Nacional: Nacional;
    Nacionalidad: string;
    Extranjero: Extranjero;
    constructor(receptor: IReceptor);
    json(): any;
}
