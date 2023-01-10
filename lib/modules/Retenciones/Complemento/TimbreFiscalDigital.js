"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimbreFiscalDigital = void 0;
class TimbreFiscalDigital {
    FechaTimbrado;
    NoCertificadoSAT;
    RfcProvCertif;
    SelloCFD;
    SelloSAT;
    UUID;
    version;
    constructor(timbre) {
        this.FechaTimbrado = timbre.FechaTimbrado;
        this.NoCertificadoSAT = timbre.NoCertificadoSAT;
        this.RfcProvCertif = timbre.RfcProvCertif;
        this.SelloCFD = timbre.SelloCFD;
        this.SelloSAT = timbre.SelloSAT;
        this.UUID = timbre.UUID;
        this.version = timbre.version;
    }
    json() {
        return {
            FechaTimbrado: this.FechaTimbrado,
            NoCertificadoSAT: this.NoCertificadoSAT,
            RfcProvCertif: this.RfcProvCertif,
            SelloCFD: this.SelloCFD,
            SelloSAT: this.SelloSAT,
            UUID: this.UUID,
            version: this.version
        };
    }
}
exports.TimbreFiscalDigital = TimbreFiscalDigital;
