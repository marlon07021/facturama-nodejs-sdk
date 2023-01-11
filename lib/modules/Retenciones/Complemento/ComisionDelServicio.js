"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComisionDelServicio = void 0;
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
            Porcentaje: this.Porcentaje,
        };
    }
}
exports.ComisionDelServicio = ComisionDelServicio;
