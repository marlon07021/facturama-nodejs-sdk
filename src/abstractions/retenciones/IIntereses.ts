import { ISerializable } from '../ISerializable';

export interface IIntereses extends ISerializable {
  Version: string;
  SistFinanciero: number;
  RetiroAORESRetInt: number;
  OperFinancDerivad: number;
  MontIntNominal: number;
  MontIntReal: number;
  Perdida: number;
}
