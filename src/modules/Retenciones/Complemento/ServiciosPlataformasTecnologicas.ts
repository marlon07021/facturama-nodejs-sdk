import { IServiciosPlataformasTecnologicas } from '../../../abstractions';
import { Servicio } from './Servicio';

export class ServiciosPlataformasTecnologicas implements IServiciosPlataformasTecnologicas {
  DifIvaEntregadoPrestServ: number;
  MonTotalContribucionGubernamental: number;
  MonTotalporUsoPlataforma: number;
  MontToServSIva: number;
  NumServ: number;
  Periodicidad: string;
  Servicios: Servicio[];
  TotalIsrRetenido: number;
  TotalIvaRetenido: number;
  TotalIvaTrasladado: number;

  constructor(servicios: IServiciosPlataformasTecnologicas) {
    this.DifIvaEntregadoPrestServ = servicios.DifIvaEntregadoPrestServ;
    this.MonTotalContribucionGubernamental = servicios.MonTotalContribucionGubernamental;
    this.MonTotalporUsoPlataforma = servicios.MonTotalporUsoPlataforma;
    this.MontToServSIva = servicios.MontToServSIva;
    this.NumServ = servicios.NumServ;
    this.Periodicidad = servicios.Periodicidad;
    this.Servicios = servicios.Servicios.map((servicio) => new Servicio(servicio));
    this.TotalIsrRetenido = servicios.TotalIsrRetenido;
    this.TotalIvaRetenido = servicios.TotalIvaRetenido;
    this.TotalIvaTrasladado = servicios.TotalIvaTrasladado;
  }

  json(): any {
    return {
      DifIvaEntregadoPrestServ: this.DifIvaEntregadoPrestServ,
      MonTotalContribucionGubernamental: this.MonTotalContribucionGubernamental,
      MonTotalporUsoPlataforma: this.MonTotalporUsoPlataforma,
      MontToServSIva: this.MontToServSIva,
      NumServ: this.NumServ,
      Periodicidad: this.Periodicidad,
      Servicios: this.Servicios.map((servicio: Servicio) => servicio.json()),
      TotalIsrRetenido: this.TotalIsrRetenido,
      TotalIvaRetenido: this.TotalIvaRetenido,
      TotalIvaTrasladado: this.TotalIvaTrasladado,
    };
  }
}
