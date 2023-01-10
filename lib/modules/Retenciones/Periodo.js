"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Periodo {
    Ejerc;
    MesFin;
    MesIni;
    constructor(periodo) {
        this.Ejerc = periodo.Ejerc;
        this.MesFin = periodo.MesFin;
        this.MesIni = periodo.MesIni;
    }
    json() {
        return {
            Ejerc: this.Ejerc,
            MesFin: this.MesFin,
            MesIni: this.MesIni
        };
    }
}
exports.default = Periodo;
