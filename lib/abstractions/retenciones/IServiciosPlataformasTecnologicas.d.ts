import { ISerializable } from "../ISerializable";
import { IServicio } from "./IServicio";
export interface IServiciosPlataformasTecnologicas extends ISerializable {
    "Servicios": IServicio[];
    Periodicidad: string;
    NumServ: number;
    MontToServSIva: number;
    TotalIvaTrasladado: number;
    TotalIvaRetenido: number;
    TotalIsrRetenido: number;
    DifIvaEntregadoPrestServ: number;
    MonTotalporUsoPlataforma: number;
    MonTotalContribucionGubernamental: number;
}
