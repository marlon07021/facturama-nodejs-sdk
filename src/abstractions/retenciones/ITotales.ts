import { ISerializable } from '../ISerializable';

export interface IImpRetenidos extends ISerializable {
  BaseRet: number;
  Impuesto: string;
  MontoRet: number;
  TipoPagoRet: string;
}
export interface ITotales extends ISerializable {
  MontoTotOperacion: number;
  MontoTotGrav: number;
  MontoTotExent: number;
  MontoTotRet: number;

  ImpRetenidos: IImpRetenidos[];
}
