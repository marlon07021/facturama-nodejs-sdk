"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emisor = void 0;
class Emisor {
    RfcEmisor;
    NomDenRazSocE;
    CurpE;
    constructor(emisor) {
        this.RfcEmisor = emisor.RfcEmisor;
        this.NomDenRazSocE = emisor.NomDenRazSocE;
        this.CurpE = emisor.CurpE;
    }
    json() {
        return {
            RfcEmisor: this.RfcEmisor,
            NomDenRazSocE: this.NomDenRazSocE,
            CurpE: this.CurpE,
        };
    }
}
exports.Emisor = Emisor;
