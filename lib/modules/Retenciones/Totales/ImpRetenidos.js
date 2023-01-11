"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImpRetenidos = void 0;
class ImpRetenidos {
    BaseRet;
    Impuesto;
    MontoRet;
    TipoPagoRet;
    constructor(impuesto) {
        this.BaseRet = impuesto.BaseRet;
        this.Impuesto = impuesto.Impuesto;
        this.MontoRet = impuesto.MontoRet;
        this.TipoPagoRet = impuesto.TipoPagoRet;
    }
    json() {
        return {
            BaseRet: this.BaseRet,
            Impuesto: this.Impuesto,
            MontoRet: this.MontoRet,
            TipoPagoRet: this.TipoPagoRet,
        };
    }
}
exports.ImpRetenidos = ImpRetenidos;
