"use strict";
/**
 * CDFI v4
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CFDIv4 = void 0;
class CFDIv4 {
    Serie;
    Currency;
    ExpeditionPlace;
    PaymentConditions;
    Folio;
    CfdiType;
    PaymentForm;
    PaymentMethod;
    Issuer;
    Receiver;
    Items;
    constructor(cfdi) {
        this.Serie = cfdi.Serie;
        this.Currency = cfdi.Currency;
        this.ExpeditionPlace = cfdi.ExpeditionPlace;
        this.PaymentConditions = cfdi.PaymentConditions;
        this.Folio = cfdi.Folio;
        this.CfdiType = cfdi.CfdiType;
        this.PaymentForm = cfdi.PaymentForm;
        this.PaymentMethod = cfdi.PaymentMethod;
        this.Issuer = cfdi.Issuer;
        this.Receiver = cfdi.Receiver;
        this.Items = cfdi.Items;
    }
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    json() {
        return {
            Serie: this.Serie,
            Currency: this.Currency,
            ExpeditionPlace: this.ExpeditionPlace,
            PaymentConditions: this.PaymentConditions,
            Folio: this.Folio,
            CfdiType: this.CfdiType,
            PaymentForm: this.PaymentForm,
            PaymentMethod: this.PaymentMethod,
            Issuer: this.Issuer,
            Receiver: this.Receiver,
            Items: this.Items,
        };
    }
}
exports.CFDIv4 = CFDIv4;
