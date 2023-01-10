"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complemento = exports.TimbreFiscalDigital = exports.ServiciosPlataformasTecnologicas = exports.Servicio = exports.ImpuestosTrasladadosdelServicio = exports.ContribucionGubernamental = exports.ComisionDelServicio = exports.Intereses = void 0;
class Intereses {
    MontIntNominal;
    MontIntReal;
    OperFinancDerivad;
    Perdida;
    RetiroAORESRetInt;
    SistFinanciero;
    Version;
    constructor(intereses) {
        this.MontIntNominal = intereses.MontIntNominal;
        this.MontIntReal = intereses.MontIntReal;
        this.OperFinancDerivad = intereses.OperFinancDerivad;
        this.Perdida = intereses.Perdida;
        this.RetiroAORESRetInt = intereses.RetiroAORESRetInt;
        this.SistFinanciero = intereses.SistFinanciero;
        this.Version = intereses.Version;
    }
    json() {
        return {
            MontIntNominal: this.MontIntNominal,
            MontIntReal: this.MontIntReal,
            OperFinancDerivad: this.OperFinancDerivad,
            Perdida: this.Perdida,
            RetiroAORESRetInt: this.RetiroAORESRetInt,
            SistFinanciero: this.SistFinanciero,
            Version: this.Version
        };
    }
}
exports.Intereses = Intereses;
class ComisionDelServicio {
    Base;
    Importe;
    Porcentaje;
    constructor(comision) {
        this.Base = comision.Base;
        this.Importe = comision.Importe;
        this.Porcentaje = comision.Porcentaje;
    }
    json() {
        return {
            Base: this.Base,
            Importe: this.Importe,
            Porcentaje: this.Porcentaje
        };
    }
}
exports.ComisionDelServicio = ComisionDelServicio;
class ContribucionGubernamental {
    EntidadDondePagaLaContribucion;
    ImpContrib;
    constructor(contribucion) {
        this.EntidadDondePagaLaContribucion = contribucion.EntidadDondePagaLaContribucion;
        this.ImpContrib = contribucion.ImpContrib;
    }
    json() {
        return {
            EntidadDondePagaLaContribucion: this.EntidadDondePagaLaContribucion,
            ImpContrib: this.ImpContrib
        };
    }
}
exports.ContribucionGubernamental = ContribucionGubernamental;
class ImpuestosTrasladadosdelServicio {
    Base;
    Importe;
    Impuesto;
    TasaCuota;
    constructor(impuesto) {
        this.Base = impuesto.Base;
        this.Importe = impuesto.Importe;
        this.Impuesto = impuesto.Impuesto;
        this.TasaCuota = impuesto.TasaCuota;
    }
    json() {
        return {
            Base: this.Base,
            Importe: this.Importe,
            Impuesto: this.Impuesto,
            TasaCuota: this.TasaCuota
        };
    }
}
exports.ImpuestosTrasladadosdelServicio = ImpuestosTrasladadosdelServicio;
class Servicio {
    ComisionDelServicio;
    ContribucionGubernamental;
    FechaServ;
    FormaPagoServ;
    ImpuestosTrasladadosdelServicio;
    PrecioServSinIva;
    RfcTerceroAutorizado;
    SubTipServ;
    TipoDeServ;
    constructor(servicio) {
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
    json() {
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
        };
    }
}
exports.Servicio = Servicio;
class ServiciosPlataformasTecnologicas {
    DifIvaEntregadoPrestServ;
    MonTotalContribucionGubernamental;
    MonTotalporUsoPlataforma;
    MontToServSIva;
    NumServ;
    Periodicidad;
    Servicios;
    TotalIsrRetenido;
    TotalIvaRetenido;
    TotalIvaTrasladado;
    constructor(servicios) {
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
    json() {
        return {
            DifIvaEntregadoPrestServ: this.DifIvaEntregadoPrestServ,
            MonTotalContribucionGubernamental: this.MonTotalContribucionGubernamental,
            MonTotalporUsoPlataforma: this.MonTotalporUsoPlataforma,
            MontToServSIva: this.MontToServSIva,
            NumServ: this.NumServ,
            Periodicidad: this.Periodicidad,
            Servicios: this.Servicios.map((servicio) => servicio.json()),
            TotalIsrRetenido: this.TotalIsrRetenido,
            TotalIvaRetenido: this.TotalIvaRetenido,
            TotalIvaTrasladado: this.TotalIvaTrasladado
        };
    }
}
exports.ServiciosPlataformasTecnologicas = ServiciosPlataformasTecnologicas;
class TimbreFiscalDigital {
    FechaTimbrado;
    NoCertificadoSAT;
    RfcProvCertif;
    SelloCFD;
    SelloSAT;
    UUID;
    version;
    constructor(timbre) {
        this.FechaTimbrado = timbre.FechaTimbrado;
        this.NoCertificadoSAT = timbre.NoCertificadoSAT;
        this.RfcProvCertif = timbre.RfcProvCertif;
        this.SelloCFD = timbre.SelloCFD;
        this.SelloSAT = timbre.SelloSAT;
        this.UUID = timbre.UUID;
        this.version = timbre.version;
    }
    json() {
        return {
            FechaTimbrado: this.FechaTimbrado,
            NoCertificadoSAT: this.NoCertificadoSAT,
            RfcProvCertif: this.RfcProvCertif,
            SelloCFD: this.SelloCFD,
            SelloSAT: this.SelloSAT,
            UUID: this.UUID,
            version: this.version
        };
    }
}
exports.TimbreFiscalDigital = TimbreFiscalDigital;
class Complemento {
    Intereses;
    ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital;
    constructor(complemento) {
        this.Intereses = new Intereses(complemento.Intereses);
        this.ServiciosPlataformasTecnologicas = new ServiciosPlataformasTecnologicas(complemento.ServiciosPlataformasTecnologicas);
        this.TimbreFiscalDigital = new TimbreFiscalDigital(complemento.TimbreFiscalDigital);
    }
    json() {
        return {
            Intereses: this.Intereses.json(),
            ServiciosPlataformasTecnologicas: this.ServiciosPlataformasTecnologicas.json(),
            TimbreFiscalDigital: this.TimbreFiscalDigital.json()
        };
    }
}
exports.Complemento = Complemento;
