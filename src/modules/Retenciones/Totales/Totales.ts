import { IImpRetenidos, ITotales } from '../../../abstractions';
import { ImpRetenidos } from './';

export class Totales implements ITotales {
  MontoTotGrav: number;
  ImpRetenidos: IImpRetenidos[];
  MontoTotExent: number;
  MontoTotOperacion: number;
  MontoTotRet: number;

  constructor(totales: ITotales) {
    this.MontoTotGrav = totales.MontoTotGrav;
    this.ImpRetenidos = totales.ImpRetenidos.map((impRetenidos: IImpRetenidos) => new ImpRetenidos(impRetenidos));
    this.MontoTotExent = totales.MontoTotExent;
    this.MontoTotOperacion = totales.MontoTotOperacion;
    this.MontoTotRet = totales.MontoTotRet;
  }

  json(): any {
    return {
      MontoTotGrav: this.MontoTotGrav,
      ImpRetenidos: this.ImpRetenidos.map((impRetenidos: IImpRetenidos) => impRetenidos.json()),
      MontoTotExent: this.MontoTotExent,
      MontoTotOperacion: this.MontoTotOperacion,
      MontoTotRet: this.MontoTotRet,
    };
  }
}
