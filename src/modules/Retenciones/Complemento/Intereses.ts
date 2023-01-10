import { IIntereses } from '../../../abstractions';

export class Intereses implements IIntereses {
  MontIntNominal: number;
  MontIntReal: number;
  OperFinancDerivad: number;
  Perdida: number;
  RetiroAORESRetInt: number;
  SistFinanciero: number;
  Version: string;

  constructor(intereses: IIntereses) {
    this.MontIntNominal = intereses.MontIntNominal;
    this.MontIntReal = intereses.MontIntReal;
    this.OperFinancDerivad = intereses.OperFinancDerivad;
    this.Perdida = intereses.Perdida;
    this.RetiroAORESRetInt = intereses.RetiroAORESRetInt;
    this.SistFinanciero = intereses.SistFinanciero;
    this.Version = intereses.Version;
  }

  json(): any {
    return {
      MontIntNominal: this.MontIntNominal,
      MontIntReal: this.MontIntReal,
      OperFinancDerivad: this.OperFinancDerivad,
      Perdida: this.Perdida,
      RetiroAORESRetInt: this.RetiroAORESRetInt,
      SistFinanciero: this.SistFinanciero,
      Version: this.Version,
    };
  }
}
