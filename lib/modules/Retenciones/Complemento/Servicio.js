"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const ComisionDelServicio_1 = require("./ComisionDelServicio");
const ContribucionGubernamental_1 = require("./ContribucionGubernamental");
const ImpuestosTrasladadosdelServicio_1 = require("./ImpuestosTrasladadosdelServicio");
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
        this.ComisionDelServicio = new ComisionDelServicio_1.ComisionDelServicio(servicio.ComisionDelServicio);
        this.ContribucionGubernamental = new ContribucionGubernamental_1.ContribucionGubernamental(servicio.ContribucionGubernamental);
        this.FechaServ = servicio.FechaServ;
        this.FormaPagoServ = servicio.FormaPagoServ;
        this.ImpuestosTrasladadosdelServicio = new ImpuestosTrasladadosdelServicio_1.ImpuestosTrasladadosdelServicio(servicio.ImpuestosTrasladadosdelServicio);
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
            TipoDeServ: this.TipoDeServ,
        };
    }
}
exports.Servicio = Servicio;
