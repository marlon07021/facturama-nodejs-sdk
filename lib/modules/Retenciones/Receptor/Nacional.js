"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nacional = void 0;
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
