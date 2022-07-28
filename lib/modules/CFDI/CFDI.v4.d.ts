/**
 * CDFI v4
 */
import Issuer from "./Issuer";
import Receiver from "./Receiver";
import Item from "./Item";
import { CFDIv4Interface } from "../../abstractions/CFDI.v4.interface";
export declare class CFDIv4 implements CFDIv4Interface {
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
