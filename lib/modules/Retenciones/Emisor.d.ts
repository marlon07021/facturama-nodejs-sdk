import { IEmisor } from '../../abstractions';
export declare class Emisor implements IEmisor {
    RfcEmisor: string;
    NomDenRazSocE: string;
    CurpE: string;
    constructor(emisor: IEmisor);
    json(): any;
}
