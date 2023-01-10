import { IImpuestosTrasladadosdelServicio } from '../../../abstractions';

export class ImpuestosTrasladadosdelServicio implements IImpuestosTrasladadosdelServicio {
  Base: number;
  Importe: number;
  Impuesto: string;
  TasaCuota: number;

  constructor(impuesto: IImpuestosTrasladadosdelServicio) {
    this.Base = impuesto.Base;
    this.Importe = impuesto.Importe;
    this.Impuesto = impuesto.Impuesto;
    this.TasaCuota = impuesto.TasaCuota;
  }

  json(): any {
    return {
      Base: this.Base,
      Importe: this.Importe,
      Impuesto: this.Impuesto,
      TasaCuota: this.TasaCuota,
    };
  }
}
