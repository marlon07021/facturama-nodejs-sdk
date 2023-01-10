import { ITimbreFiscalDigital } from '../../../abstractions';

export class TimbreFiscalDigital implements ITimbreFiscalDigital {
  FechaTimbrado: string | Date;
  NoCertificadoSAT: string;
  RfcProvCertif: string;
  SelloCFD: string;
  SelloSAT: string;
  UUID: string;
  version: string;

  constructor(timbre: ITimbreFiscalDigital) {
    this.FechaTimbrado = timbre.FechaTimbrado;
    this.NoCertificadoSAT = timbre.NoCertificadoSAT;
    this.RfcProvCertif = timbre.RfcProvCertif;
    this.SelloCFD = timbre.SelloCFD;
    this.SelloSAT = timbre.SelloSAT;
    this.UUID = timbre.UUID;
    this.version = timbre.version;
  }

  json(): any {
    return {
      FechaTimbrado: this.FechaTimbrado,
      NoCertificadoSAT: this.NoCertificadoSAT,
      RfcProvCertif: this.RfcProvCertif,
      SelloCFD: this.SelloCFD,
      SelloSAT: this.SelloSAT,
      UUID: this.UUID,
      version: this.version,
    };
  }
}
