import { ISerializable } from '../ISerializable';
export interface ITimbreFiscalDigital extends ISerializable {
    version: string;
    UUID: string;
    FechaTimbrado: string | Date;
    SelloCFD: string;
    NoCertificadoSAT: string;
    SelloSAT: string;
    RfcProvCertif: string;
}
