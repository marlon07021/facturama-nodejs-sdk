"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Extranjero = void 0;
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
            NumRegIdTrib: this.NumRegIdTrib,
        };
    }
}
exports.Extranjero = Extranjero;
