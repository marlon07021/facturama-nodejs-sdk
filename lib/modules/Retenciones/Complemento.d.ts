import { IComisionDelServicio, IComplemento, IContribucionGubernamental, IImpuestosTrasladadosdelServicio, IIntereses, IServicio, IServiciosPlataformasTecnologicas, ITimbreFiscalDigital } from "../../abstractions";
export declare class Intereses implements IIntereses {
    MontIntNominal: number;
    MontIntReal: number;
    OperFinancDerivad: number;
    Perdida: number;
    RetiroAORESRetInt: number;
    SistFinanciero: number;
    Version: string;
    constructor(intereses: IIntereses);
    json(): any;
}
export declare class ComisionDelServicio implements IComisionDelServicio {
    Base: number;
    Importe: number;
    Porcentaje: number;
    constructor(comision: IComisionDelServicio);
    json(): any;
}
export declare class ContribucionGubernamental implements IContribucionGubernamental {
    EntidadDondePagaLaContribucion: string;
    ImpContrib: number;
    constructor(contribucion: IContribucionGubernamental);
    json(): any;
}
export declare class ImpuestosTrasladadosdelServicio implements IImpuestosTrasladadosdelServicio {
    Base: number;
    Importe: number;
    Impuesto: string;
    TasaCuota: number;
    constructor(impuesto: IImpuestosTrasladadosdelServicio);
    json(): any;
}
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
export declare class TimbreFiscalDigital implements ITimbreFiscalDigital {
    FechaTimbrado: string | Date;
    NoCertificadoSAT: string;
    RfcProvCertif: string;
    SelloCFD: string;
    SelloSAT: string;
    UUID: string;
    version: string;
    constructor(timbre: ITimbreFiscalDigital);
    json(): any;
}
export declare class Complemento implements IComplemento {
    Intereses: Intereses;
    ServiciosPlataformasTecnologicas: ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital: TimbreFiscalDigital;
    constructor(complemento: IComplemento);
    json(): any;
}
