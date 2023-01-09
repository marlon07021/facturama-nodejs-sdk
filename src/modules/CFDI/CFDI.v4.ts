/**
 * CDFI v4
 */

import Issuer from "./Issuer";
import Receiver from "./Receiver";
import Item from "./Item";
import {ICFDIv4} from "../../abstractions/cfdi/ICFDI4";

export class CFDIv4 implements ICFDIv4{
    public Serie: string;
    public Currency: string;
    public ExpeditionPlace: string;
    public PaymentConditions: string;
    public Folio: string;
    public CfdiType: string;
    public PaymentForm: string;
    public PaymentMethod: string;
    public Issuer: Issuer;
    public Receiver: Receiver;
    public Items: Item[];

    constructor(cfdi: any) {
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
    public json(): any {
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
            Items: this.Items
        }
    };
}
