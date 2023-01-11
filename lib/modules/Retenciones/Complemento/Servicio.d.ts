import { IServicio } from '../../../abstractions';
import { ComisionDelServicio } from './ComisionDelServicio';
import { ContribucionGubernamental } from './ContribucionGubernamental';
import { ImpuestosTrasladadosdelServicio } from './ImpuestosTrasladadosdelServicio';
export declare class Servicio implements IServicio {
    ComisionDelServicio: ComisionDelServicio;
    ContribucionGubernamental: ContribucionGubernamental;
    FechaServ: string;
    FormaPagoServ: string;
    ImpuestosTrasladadosdelServicio: ImpuestosTrasladadosdelServicio;
    PrecioServSinIva: number;
    RfcTerceroAutorizado: string;
    SubTipServ: string;
    TipoDeServ: string;
    constructor(servicio: IServicio);
    json(): any;
}
