import { IServiciosPlataformasTecnologicas } from '../../../abstractions';
import { Servicio } from './';
export declare class ServiciosPlataformasTecnologicas implements IServiciosPlataformasTecnologicas {
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
    constructor(servicios: IServiciosPlataformasTecnologicas);
    json(): any;
}
