import { IEmisor } from '../../abstractions';

export default class Emisor implements IEmisor {
  RfcEmisor: string;
  NomDenRazSocE: string;
  CurpE: string;

  constructor(emisor: IEmisor) {
    this.RfcEmisor = emisor.RfcEmisor;
    this.NomDenRazSocE = emisor.NomDenRazSocE;
    this.CurpE = emisor.CurpE;
  }

  json(): any {
    return {
      RfcEmisor: this.RfcEmisor,
      NomDenRazSocE: this.NomDenRazSocE,
      CurpE: this.CurpE,
    };
  }
}
