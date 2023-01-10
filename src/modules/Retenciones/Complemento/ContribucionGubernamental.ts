import { IContribucionGubernamental } from '../../../abstractions';

export class ContribucionGubernamental implements IContribucionGubernamental {
  EntidadDondePagaLaContribucion: string;
  ImpContrib: number;

  constructor(contribucion: IContribucionGubernamental) {
    this.EntidadDondePagaLaContribucion = contribucion.EntidadDondePagaLaContribucion;
    this.ImpContrib = contribucion.ImpContrib;
  }

  json(): any {
    return {
      EntidadDondePagaLaContribucion: this.EntidadDondePagaLaContribucion,
      ImpContrib: this.ImpContrib,
    };
  }
}
