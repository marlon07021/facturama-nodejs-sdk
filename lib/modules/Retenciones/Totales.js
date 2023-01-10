"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Totales = exports.ImpRetenidos = void 0;
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
            TipoPagoRet: this.TipoPagoRet
        };
    }
}
exports.ImpRetenidos = ImpRetenidos;
class Totales {
    MontoTotGrav;
    ImpRetenidos;
    MontoTotExent;
    MontoTotOperacion;
    MontoTotRet;
    constructor(totales) {
        this.MontoTotGrav = totales.MontoTotGrav;
        this.ImpRetenidos = totales.ImpRetenidos.map((impRetenidos) => new ImpRetenidos(impRetenidos));
        this.MontoTotExent = totales.MontoTotExent;
        this.MontoTotOperacion = totales.MontoTotOperacion;
        this.MontoTotRet = totales.MontoTotRet;
    }
    json() {
        return {
            MontoTotGrav: this.MontoTotGrav,
            ImpRetenidos: this.ImpRetenidos.map((impRetenidos) => impRetenidos.json()),
            MontoTotExent: this.MontoTotExent,
            MontoTotOperacion: this.MontoTotOperacion,
            MontoTotRet: this.MontoTotRet
        };
    }
}
exports.Totales = Totales;
