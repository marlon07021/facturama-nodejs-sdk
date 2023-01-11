import { IPeriodo } from '../../abstractions';
export declare class Periodo implements IPeriodo {
    Ejerc: number;
    MesFin: number;
    MesIni: number;
    constructor(periodo: IPeriodo);
    json(): any;
}
