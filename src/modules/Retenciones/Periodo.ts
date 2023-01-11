import { IPeriodo } from '../../abstractions';

export class Periodo implements IPeriodo {
  Ejerc: number;
  MesFin: number;
  MesIni: number;

  constructor(periodo: IPeriodo) {
    this.Ejerc = periodo.Ejerc;
    this.MesFin = periodo.MesFin;
    this.MesIni = periodo.MesIni;
  }

  json(): any {
    return {
      Ejerc: this.Ejerc,
      MesFin: this.MesFin,
      MesIni: this.MesIni,
    };
  }
}
