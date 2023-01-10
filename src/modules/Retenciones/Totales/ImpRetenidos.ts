import { IImpRetenidos } from '../../../abstractions';

export class ImpRetenidos implements IImpRetenidos {
  BaseRet: number;
  Impuesto: string;
  MontoRet: number;
  TipoPagoRet: string;

  constructor(impuesto: IImpRetenidos) {
    this.BaseRet = impuesto.BaseRet;
    this.Impuesto = impuesto.Impuesto;
    this.MontoRet = impuesto.MontoRet;
    this.TipoPagoRet = impuesto.TipoPagoRet;
  }

  json(): any {
    return {
      BaseRet: this.BaseRet,
      Impuesto: this.Impuesto,
      MontoRet: this.MontoRet,
      TipoPagoRet: this.TipoPagoRet,
    };
  }
}
