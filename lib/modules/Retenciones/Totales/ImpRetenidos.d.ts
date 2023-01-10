import { IImpRetenidos } from "../../../abstractions";
export declare class ImpRetenidos implements IImpRetenidos {
    BaseRet: number;
    Impuesto: string;
    MontoRet: number;
    TipoPagoRet: string;
    constructor(impuesto: IImpRetenidos);
    json(): any;
}
