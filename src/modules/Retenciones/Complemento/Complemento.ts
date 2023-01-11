import { IComplemento } from '../../../abstractions';
import { Intereses } from './Intereses';
import { ServiciosPlataformasTecnologicas } from './ServiciosPlataformasTecnologicas';
import { TimbreFiscalDigital } from './TimbreFiscalDigital';

export class Complemento implements IComplemento {
  Intereses: Intereses;
  ServiciosPlataformasTecnologicas: ServiciosPlataformasTecnologicas;
  TimbreFiscalDigital: TimbreFiscalDigital;

  constructor(complemento: IComplemento) {
    this.Intereses = new Intereses(complemento.Intereses);
    this.ServiciosPlataformasTecnologicas = new ServiciosPlataformasTecnologicas(
      complemento.ServiciosPlataformasTecnologicas,
    );
    this.TimbreFiscalDigital = new TimbreFiscalDigital(complemento.TimbreFiscalDigital);
  }

  json(): any {
    return {
      Intereses: this.Intereses.json(),
      ServiciosPlataformasTecnologicas: this.ServiciosPlataformasTecnologicas.json(),
      TimbreFiscalDigital: this.TimbreFiscalDigital.json(),
    };
  }
}
