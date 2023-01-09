import {
    IComisionDelServicio,
    IComplemento, IContribucionGubernamental, IImpuestosTrasladadosdelServicio,
    IIntereses,
    IServicio,
    IServiciosPlataformasTecnologicas,
    ITimbreFiscalDigital
} from "../../abstractions";

export class Intereses implements IIntereses {
    MontIntNominal: number;
    MontIntReal: number;
    OperFinancDerivad: number;
    Perdida: number;
    RetiroAORESRetInt: number;
    SistFinanciero: number;
    Version: string;

    constructor(intereses: IIntereses) {
        this.MontIntNominal = intereses.MontIntNominal;
        this.MontIntReal = intereses.MontIntReal;
        this.OperFinancDerivad = intereses.OperFinancDerivad;
        this.Perdida = intereses.Perdida;
        this.RetiroAORESRetInt = intereses.RetiroAORESRetInt;
        this.SistFinanciero = intereses.SistFinanciero;
        this.Version = intereses.Version;
    }

    json(): any {
        return {
            MontIntNominal: this.MontIntNominal,
            MontIntReal: this.MontIntReal,
            OperFinancDerivad: this.OperFinancDerivad,
            Perdida: this.Perdida,
            RetiroAORESRetInt: this.RetiroAORESRetInt,
            SistFinanciero: this.SistFinanciero,
            Version: this.Version
        }
    }

}

export class ComisionDelServicio implements IComisionDelServicio {
    Base: number;
    Importe: number;
    Porcentaje: number;

    constructor(comision: IComisionDelServicio) {
        this.Base = comision.Base;
        this.Importe = comision.Importe;
        this.Porcentaje = comision.Porcentaje;
    }

    json(): any {
        return {
            Base: this.Base,
            Importe: this.Importe,
            Porcentaje: this.Porcentaje
        }
    }

}

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
            ImpContrib: this.ImpContrib
        }
    }
}

export class ImpuestosTrasladadosdelServicio implements IImpuestosTrasladadosdelServicio {
    Base: number;
    Importe: number;
    Impuesto: string;
    TasaCuota: number;

    constructor(impuesto: IImpuestosTrasladadosdelServicio) {
        this.Base = impuesto.Base;
        this.Importe = impuesto.Importe;
        this.Impuesto = impuesto.Impuesto;
        this.TasaCuota = impuesto.TasaCuota;
    }

    json(): any {
        return {
            Base: this.Base,
            Importe: this.Importe,
            Impuesto: this.Impuesto,
            TasaCuota: this.TasaCuota
        }
    }

}

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
        this.ImpuestosTrasladadosdelServicio = new ImpuestosTrasladadosdelServicio(servicio.ImpuestosTrasladadosdelServicio);
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
            TipoDeServ: this.TipoDeServ
        }
    }

}
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
        this.Servicios = servicios.Servicios.map(servicio => new Servicio(servicio));
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
            TotalIvaTrasladado: this.TotalIvaTrasladado
        }
    }

}

export class TimbreFiscalDigital implements ITimbreFiscalDigital {
    FechaTimbrado: string | Date;
    NoCertificadoSAT: string;
    RfcProvCertif: string;
    SelloCFD: string;
    SelloSAT: string;
    UUID: string;
    version: string;

    constructor(timbre: ITimbreFiscalDigital) {
        this.FechaTimbrado = timbre.FechaTimbrado;
        this.NoCertificadoSAT = timbre.NoCertificadoSAT;
        this.RfcProvCertif = timbre.RfcProvCertif;
        this.SelloCFD = timbre.SelloCFD;
        this.SelloSAT = timbre.SelloSAT;
        this.UUID = timbre.UUID;
        this.version = timbre.version;
    }

    json(): any {
        return {
            FechaTimbrado: this.FechaTimbrado,
            NoCertificadoSAT: this.NoCertificadoSAT,
            RfcProvCertif: this.RfcProvCertif,
            SelloCFD: this.SelloCFD,
            SelloSAT: this.SelloSAT,
            UUID: this.UUID,
            version: this.version
        }
    }

}

export class Complemento implements IComplemento {
    Intereses: Intereses;
    ServiciosPlataformasTecnologicas: ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital: TimbreFiscalDigital;

    constructor(complemento: IComplemento) {
        this.Intereses = new Intereses(complemento.Intereses);
        this.ServiciosPlataformasTecnologicas = new ServiciosPlataformasTecnologicas(complemento.ServiciosPlataformasTecnologicas);
        this.TimbreFiscalDigital = new TimbreFiscalDigital(complemento.TimbreFiscalDigital);
    }

    json(): any {
        return {
            Intereses: this.Intereses.json(),
            ServiciosPlataformasTecnologicas: this.ServiciosPlataformasTecnologicas.json(),
            TimbreFiscalDigital: this.TimbreFiscalDigital.json()
        }
    }

}
