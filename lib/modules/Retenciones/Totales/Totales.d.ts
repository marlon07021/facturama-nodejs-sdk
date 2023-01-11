import { IImpRetenidos, ITotales } from '../../../abstractions';
export declare class Totales implements ITotales {
    MontoTotGrav: number;
    ImpRetenidos: IImpRetenidos[];
    MontoTotExent: number;
    MontoTotOperacion: number;
    MontoTotRet: number;
    constructor(totales: ITotales);
    json(): any;
}
