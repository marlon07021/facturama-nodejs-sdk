import { INacional } from '../../../abstractions';
export declare class Nacional implements INacional {
    RfcRecep: string;
    NomDenRazSocR: string;
    CurpR: string;
    constructor(nacional: INacional);
    json(): any;
}
