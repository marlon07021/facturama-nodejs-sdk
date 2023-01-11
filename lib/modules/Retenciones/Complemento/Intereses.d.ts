import { IIntereses } from '../../../abstractions';
export declare class Intereses implements IIntereses {
    MontIntNominal: number;
    MontIntReal: number;
    OperFinancDerivad: number;
    Perdida: number;
    RetiroAORESRetInt: number;
    SistFinanciero: number;
    Version: string;
    constructor(intereses: IIntereses);
    json(): any;
}
