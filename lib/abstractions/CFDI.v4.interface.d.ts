/**
 * CDFI v4
 */
import { Issuer, Item, Receiver } from "../modules/CFDI";
import Serializable from "./Serializable";
export interface CFDIv4Interface extends Serializable {
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
}
