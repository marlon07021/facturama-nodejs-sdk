import {ISerializable} from "../ISerializable";

export interface IImpuestosTrasladadosdelServicio extends ISerializable {
    Base: number;
    Impuesto: string;
    TasaCuota: number;
    Importe: number;
}

export interface IContribucionGubernamental extends ISerializable {
    ImpContrib: number;
    EntidadDondePagaLaContribucion: string;
}

export interface IComisionDelServicio extends ISerializable {
    Base: number;
    Porcentaje: number;
    Importe: number;
}

export interface IServicio extends ISerializable {
    ImpuestosTrasladadosdelServicio: IImpuestosTrasladadosdelServicio;
    ContribucionGubernamental: IContribucionGubernamental;
    ComisionDelServicio:  IComisionDelServicio;
    FormaPagoServ: string;
    TipoDeServ: string;
    SubTipServ: string;
    RfcTerceroAutorizado: string;
    FechaServ: string;
    PrecioServSinIva: number;
}
