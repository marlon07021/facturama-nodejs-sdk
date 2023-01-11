import { IReceptor } from '../../../abstractions';
import { Nacional } from './Nacional';
import { Extranjero } from './Extranjero';

export class Receptor implements IReceptor {
  Nacional: Nacional;
  Nacionalidad: string;

  Extranjero: Extranjero;

  constructor(receptor: IReceptor) {
    this.Nacionalidad = receptor.Nacionalidad;
    this.Nacional = new Nacional(receptor.Nacional);
    this.Extranjero = new Extranjero(receptor.Extranjero);
  }

  json(): any {
    return {
      Nacionalidad: this.Nacionalidad,
      Nacional: this.Nacional.json(),
      Extranjero: this.Extranjero.json(),
    };
  }
}
