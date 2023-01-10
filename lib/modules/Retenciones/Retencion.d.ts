import { IRetencion } from "../../abstractions";
import { Complemento } from "./Complemento";
import Emisor from "./Emisor";
import Periodo from "./Periodo";
import Receptor from "./Receptor";
import { Totales } from "./Totales";
export default class Retencion implements IRetencion {
    CadenaOriginal: string;
    Complemento: Complemento;
    CveRetenc: string;
    DescRetenc: string;
    Emisor: Emisor;
    FechaExp: string;
    FolioInt: string;
    Id: string;
    IsCanceled: boolean;
    Periodo: Periodo;
    Receptor: Receptor;
    Sello: string;
    Totales: Totales;
    constructor(retencion: IRetencion);
    json(): any;
}
