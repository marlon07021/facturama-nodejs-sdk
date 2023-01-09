/**
 * Retencion
 */
import {Issuer, Item, Receiver} from "../../modules/CFDI";
import {ISerializable} from "../ISerializable";
import {IEmisor} from "./IEmisor";
import {IReceptor} from "./IReceptor";
import {IPeriodo} from "./IPeriodo";
import {ITotales} from "./ITotales";
import {IComplemento} from "./IComplemento";

export interface IRetencion extends ISerializable{
    FolioInt: string;
    FechaExp: string;
    CveRetenc: string;
    DescRetenc: string;
    Emisor: IEmisor;
    Receptor: IReceptor;
    Periodo: IPeriodo;
    Totales: ITotales;
    Complemento: IComplemento;

    Id: string;
    CadenaOriginal: string;
    IsCanceled: boolean;
    Sello: string;
}
