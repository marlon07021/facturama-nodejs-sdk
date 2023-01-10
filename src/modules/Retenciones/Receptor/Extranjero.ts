import { IExtranjero } from '../../../abstractions/retenciones/IReceptor';

export class Extranjero implements IExtranjero {
  NomDenRazSocR: string;
  NumRegIdTrib: string;

  constructor(extranjero: IExtranjero) {
    this.NomDenRazSocR = extranjero.NomDenRazSocR;
    this.NumRegIdTrib = extranjero.NumRegIdTrib;
  }

  json(): any {
    return {
      NomDenRazSocR: this.NomDenRazSocR,
      NumRegIdTrib: this.NumRegIdTrib,
    };
  }
}
