"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extranjero = exports.Nacional = void 0;
class Nacional {
    RfcRecep;
    NomDenRazSocR;
    CurpR;
    constructor(nacional) {
        this.RfcRecep = nacional.RfcRecep;
        this.NomDenRazSocR = nacional.NomDenRazSocR;
        this.CurpR = nacional.CurpR;
    }
    json() {
        return {
            RfcRecep: this.RfcRecep,
            NomDenRazSocR: this.NomDenRazSocR,
            CurpR: this.CurpR
        };
    }
}
exports.Nacional = Nacional;
class Extranjero {
    NomDenRazSocR;
    NumRegIdTrib;
    constructor(extranjero) {
        this.NomDenRazSocR = extranjero.NomDenRazSocR;
        this.NumRegIdTrib = extranjero.NumRegIdTrib;
    }
    json() {
        return {
            NomDenRazSocR: this.NomDenRazSocR,
            NumRegIdTrib: this.NumRegIdTrib
        };
    }
}
exports.Extranjero = Extranjero;
class Receptor {
    Nacional;
    Nacionalidad;
    Extranjero;
    constructor(receptor) {
        this.Nacionalidad = receptor.Nacionalidad;
        this.Nacional = new Nacional(receptor.Nacional);
        this.Extranjero = new Extranjero(receptor.Extranjero);
    }
    json() {
        return {
            Nacionalidad: this.Nacionalidad,
            Nacional: this.Nacional.json(),
            Extranjero: this.Extranjero.json()
        };
    }
}
exports.default = Receptor;
