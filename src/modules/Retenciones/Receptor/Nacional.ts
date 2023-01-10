import { INacional } from '../../../abstractions';

export class Nacional implements INacional {
  public RfcRecep: string;
  public NomDenRazSocR: string;
  public CurpR: string;

  constructor(nacional: INacional) {
    this.RfcRecep = nacional.RfcRecep;
    this.NomDenRazSocR = nacional.NomDenRazSocR;
    this.CurpR = nacional.CurpR;
  }

  json(): any {
    return {
      RfcRecep: this.RfcRecep,
      NomDenRazSocR: this.NomDenRazSocR,
      CurpR: this.CurpR,
    };
  }
}
