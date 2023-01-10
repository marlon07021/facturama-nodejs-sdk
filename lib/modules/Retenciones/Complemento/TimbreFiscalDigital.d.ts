import { ITimbreFiscalDigital } from "../../../abstractions";
export declare class TimbreFiscalDigital implements ITimbreFiscalDigital {
    FechaTimbrado: string | Date;
    NoCertificadoSAT: string;
    RfcProvCertif: string;
    SelloCFD: string;
    SelloSAT: string;
    UUID: string;
    version: string;
    constructor(timbre: ITimbreFiscalDigital);
    json(): any;
}
