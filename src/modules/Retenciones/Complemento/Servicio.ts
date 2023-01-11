import { IServicio } from '../../../abstractions';
import { ComisionDelServicio } from './ComisionDelServicio';
import { ContribucionGubernamental } from './ContribucionGubernamental';
import { ImpuestosTrasladadosdelServicio } from './ImpuestosTrasladadosdelServicio';

export class Servicio implements IServicio {
  ComisionDelServicio: ComisionDelServicio;
  ContribucionGubernamental: ContribucionGubernamental;
  FechaServ: string;
  FormaPagoServ: string;
  ImpuestosTrasladadosdelServicio: ImpuestosTrasladadosdelServicio;
  PrecioServSinIva: number;
  RfcTerceroAutorizado: string;
  SubTipServ: string;
  TipoDeServ: string;

  constructor(servicio: IServicio) {
    this.ComisionDelServicio = new ComisionDelServicio(servicio.ComisionDelServicio);
    this.ContribucionGubernamental = new ContribucionGubernamental(servicio.ContribucionGubernamental);
    this.FechaServ = servicio.FechaServ;
    this.FormaPagoServ = servicio.FormaPagoServ;
    this.ImpuestosTrasladadosdelServicio = new ImpuestosTrasladadosdelServicio(
      servicio.ImpuestosTrasladadosdelServicio,
    );
    this.PrecioServSinIva = servicio.PrecioServSinIva;
    this.RfcTerceroAutorizado = servicio.RfcTerceroAutorizado;
    this.SubTipServ = servicio.SubTipServ;
    this.TipoDeServ = servicio.TipoDeServ;
  }

  json(): any {
    return {
      ComisionDelServicio: this.ComisionDelServicio.json(),
      ContribucionGubernamental: this.ContribucionGubernamental.json(),
      FechaServ: this.FechaServ,
      FormaPagoServ: this.FormaPagoServ,
      ImpuestosTrasladadosdelServicio: this.ImpuestosTrasladadosdelServicio.json(),
      PrecioServSinIva: this.PrecioServSinIva,
      RfcTerceroAutorizado: this.RfcTerceroAutorizado,
      SubTipServ: this.SubTipServ,
      TipoDeServ: this.TipoDeServ,
    };
  }
}
