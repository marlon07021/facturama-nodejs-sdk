"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intereses = void 0;
class Intereses {
    MontIntNominal;
    MontIntReal;
    OperFinancDerivad;
    Perdida;
    RetiroAORESRetInt;
    SistFinanciero;
    Version;
    constructor(intereses) {
        this.MontIntNominal = intereses.MontIntNominal;
        this.MontIntReal = intereses.MontIntReal;
        this.OperFinancDerivad = intereses.OperFinancDerivad;
        this.Perdida = intereses.Perdida;
        this.RetiroAORESRetInt = intereses.RetiroAORESRetInt;
        this.SistFinanciero = intereses.SistFinanciero;
        this.Version = intereses.Version;
    }
    json() {
        return {
            MontIntNominal: this.MontIntNominal,
            MontIntReal: this.MontIntReal,
            OperFinancDerivad: this.OperFinancDerivad,
            Perdida: this.Perdida,
            RetiroAORESRetInt: this.RetiroAORESRetInt,
            SistFinanciero: this.SistFinanciero,
            Version: this.Version
        };
    }
}
exports.Intereses = Intereses;
