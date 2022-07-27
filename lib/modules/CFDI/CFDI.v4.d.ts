/**
 * CDFI v4
 */
import Issuer from "./Issuer";
import Receiver from "./Receiver";
import Item from "./Item";
import Serializable from "../../abstractions/Serializable";
export declare class CFDIv4 implements Serializable {
    Serie: string;
    Currency: string;
    ExpeditionPlace: string;
    PaymentConditions: string;
    Folio: string;
    CfdiType: string;
    PaymentForm: string;
    PaymentMethod: string;
    Issuer: Issuer;
    Receiver: Receiver;
    Items: Item[];
    constructor(cfdi: any);
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    json(): any;
}
