import { IReceptor } from '../../../abstractions';
import { Nacional } from './Nacional';
import { Extranjero } from './Extranjero';
export declare class Receptor implements IReceptor {
    Nacional: Nacional;
    Nacionalidad: string;
    Extranjero: Extranjero;
    constructor(receptor: IReceptor);
    json(): any;
}
