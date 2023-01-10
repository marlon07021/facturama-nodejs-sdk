import { IRetencion } from '../../abstractions';
import { Complemento } from './Complemento';
import Emisor from './Emisor';
import Periodo from './Periodo';
import { Receptor } from './Receptor';
import { Totales } from './Totales';

export default class Retencion implements IRetencion {
  CadenaOriginal: string;
  Complemento: Complemento;
  CveRetenc: string;
  DescRetenc: string;
  Emisor: Emisor;
  FechaExp: string;
  FolioInt: string;
  Id: string;
  IsCanceled: boolean;
  Periodo: Periodo;
  Receptor: Receptor;
  Sello: string;
  Totales: Totales;

  constructor(retencion: IRetencion) {
    this.CadenaOriginal = retencion.CadenaOriginal;
    this.Complemento = new Complemento(retencion.Complemento);
    this.CveRetenc = retencion.CveRetenc;
    this.DescRetenc = retencion.DescRetenc;
    this.Emisor = new Emisor(retencion.Emisor);
    this.FechaExp = retencion.FechaExp;
    this.FolioInt = retencion.FolioInt;
    this.Id = retencion.Id;
    this.IsCanceled = retencion.IsCanceled;
    this.Periodo = new Periodo(retencion.Periodo);
    this.Receptor = new Receptor(retencion.Receptor);
    this.Sello = retencion.Sello;
    this.Totales = new Totales(retencion.Totales);
  }

  json(): any {
    return {
      CadenaOriginal: this.CadenaOriginal,
      Complemento: this.Complemento.json(),
      CveRetenc: this.CveRetenc,
      DescRetenc: this.DescRetenc,
      Emisor: this.Emisor.json(),
      FechaExp: this.FechaExp,
      FolioInt: this.FolioInt,
      Id: this.Id,
      IsCanceled: this.IsCanceled,
      Periodo: this.Periodo.json(),
      Receptor: this.Receptor.json(),
      Sello: this.Sello,
      Totales: this.Totales.json(),
    };
  }
}
