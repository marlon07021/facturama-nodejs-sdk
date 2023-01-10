"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const _1 = require("./");
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
        this.ComisionDelServicio = new _1.ComisionDelServicio(servicio.ComisionDelServicio);
        this.ContribucionGubernamental = new _1.ContribucionGubernamental(servicio.ContribucionGubernamental);
        this.FechaServ = servicio.FechaServ;
        this.FormaPagoServ = servicio.FormaPagoServ;
        this.ImpuestosTrasladadosdelServicio = new _1.ImpuestosTrasladadosdelServicio(servicio.ImpuestosTrasladadosdelServicio);
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
