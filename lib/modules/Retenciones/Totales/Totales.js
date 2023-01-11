"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Totales = void 0;
const ImpRetenidos_1 = require("./ImpRetenidos");
class Totales {
    MontoTotGrav;
    ImpRetenidos;
    MontoTotExent;
    MontoTotOperacion;
    MontoTotRet;
    constructor(totales) {
        this.MontoTotGrav = totales.MontoTotGrav;
        this.ImpRetenidos = totales.ImpRetenidos.map((impRetenidos) => new ImpRetenidos_1.ImpRetenidos(impRetenidos));
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
            MontoTotRet: this.MontoTotRet,
        };
    }
}
exports.Totales = Totales;
