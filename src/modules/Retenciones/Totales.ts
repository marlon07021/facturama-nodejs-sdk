import {IImpRetenidos, ITotales} from "../../abstractions";

export class ImpRetenidos implements IImpRetenidos {
    BaseRet: number;
    Impuesto: string;
    MontoRet: number;
    TipoPagoRet: string;

    constructor(impuesto: IImpRetenidos) {
        this.BaseRet = impuesto.BaseRet;
        this.Impuesto = impuesto.Impuesto;
        this.MontoRet = impuesto.MontoRet;
        this.TipoPagoRet = impuesto.TipoPagoRet;
    }

    json(): any {
        return {
            BaseRet: this.BaseRet,
            Impuesto: this.Impuesto,
            MontoRet: this.MontoRet,
            TipoPagoRet: this.TipoPagoRet
        }
    }

}
export class Totales implements ITotales {
    MontoTotGrav: number;
    ImpRetenidos: IImpRetenidos[];
    MontoTotExent: number;
    MontoTotOperacion: number;
    MontoTotRet: number;

    constructor(totales: ITotales){
        this.MontoTotGrav = totales.MontoTotGrav;
        this.ImpRetenidos = totales.ImpRetenidos.map((impRetenidos: IImpRetenidos) => new ImpRetenidos(impRetenidos));
        this.MontoTotExent = totales.MontoTotExent;
        this.MontoTotOperacion = totales.MontoTotOperacion;
        this.MontoTotRet = totales.MontoTotRet;
    }

    json(): any {
        return {
            MontoTotGrav: this.MontoTotGrav,
            ImpRetenidos: this.ImpRetenidos.map((impRetenidos: IImpRetenidos) => impRetenidos.json()),
            MontoTotExent: this.MontoTotExent,
            MontoTotOperacion: this.MontoTotOperacion,
            MontoTotRet: this.MontoTotRet
        }
    }
}
