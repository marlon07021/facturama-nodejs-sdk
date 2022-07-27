"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSD = /** @class */ (function () {
    function CSD(csd) {
        this.Rfc = csd.Rfc;
        this.Certificate = csd.Certificate;
        this.PrivateKey = csd.PrivateKey;
        this.PrivateKeyPassword = csd.PrivateKeyPassword;
    }
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    CSD.prototype.json = function () {
        return {
            Rfc: this.Rfc,
            Certificate: this.Certificate,
            PrivateKey: this.PrivateKey,
            PrivateKeyPassword: this.PrivateKeyPassword
        };
    };
    return CSD;
}());
exports.default = CSD;
