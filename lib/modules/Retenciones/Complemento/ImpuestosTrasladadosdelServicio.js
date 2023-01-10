"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpuestosTrasladadosdelServicio = void 0;
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
