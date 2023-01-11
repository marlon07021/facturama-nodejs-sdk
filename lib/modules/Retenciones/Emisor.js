"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Emisor;
