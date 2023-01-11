import { IComisionDelServicio } from '../../../abstractions';
export declare class ComisionDelServicio implements IComisionDelServicio {
    Base: number;
    Importe: number;
    Porcentaje: number;
    constructor(comision: IComisionDelServicio);
    json(): any;
}
