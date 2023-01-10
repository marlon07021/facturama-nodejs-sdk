import { IComisionDelServicio } from '../../../abstractions';

export class ComisionDelServicio implements IComisionDelServicio {
  Base: number;
  Importe: number;
  Porcentaje: number;

  constructor(comision: IComisionDelServicio) {
    this.Base = comision.Base;
    this.Importe = comision.Importe;
    this.Porcentaje = comision.Porcentaje;
  }

  json(): any {
    return {
      Base: this.Base,
      Importe: this.Importe,
      Porcentaje: this.Porcentaje,
    };
  }
}
