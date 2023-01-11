import { IImpuestosTrasladadosdelServicio } from '../../../abstractions';
export declare class ImpuestosTrasladadosdelServicio implements IImpuestosTrasladadosdelServicio {
    Base: number;
    Importe: number;
    Impuesto: string;
    TasaCuota: number;
    constructor(impuesto: IImpuestosTrasladadosdelServicio);
    json(): any;
}
