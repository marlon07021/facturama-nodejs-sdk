import { IEmisor } from '../../abstractions';
export default class Emisor implements IEmisor {
    RfcEmisor: string;
    NomDenRazSocE: string;
    CurpE: string;
    constructor(emisor: IEmisor);
    json(): any;
}
