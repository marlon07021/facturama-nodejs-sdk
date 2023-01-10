import { IImpRetenidos, ITotales } from "../../abstractions";
export declare class ImpRetenidos implements IImpRetenidos {
    BaseRet: number;
    Impuesto: string;
    MontoRet: number;
    TipoPagoRet: string;
    constructor(impuesto: IImpRetenidos);
    json(): any;
}
export declare class Totales implements ITotales {
    MontoTotGrav: number;
    ImpRetenidos: IImpRetenidos[];
    MontoTotExent: number;
    MontoTotOperacion: number;
    MontoTotRet: number;
    constructor(totales: ITotales);
    json(): any;
}
