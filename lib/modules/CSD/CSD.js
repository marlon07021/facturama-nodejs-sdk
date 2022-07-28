"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CSD {
    Rfc;
    Certificate;
    PrivateKey;
    PrivateKeyPassword;
    constructor(csd) {
        this.Rfc = csd.Rfc;
        this.Certificate = csd.Certificate;
        this.PrivateKey = csd.PrivateKey;
        this.PrivateKeyPassword = csd.PrivateKeyPassword;
    }
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    json() {
        return {
            Rfc: this.Rfc,
            Certificate: this.Certificate,
            PrivateKey: this.PrivateKey,
            PrivateKeyPassword: this.PrivateKeyPassword
        };
    }
}
exports.default = CSD;
