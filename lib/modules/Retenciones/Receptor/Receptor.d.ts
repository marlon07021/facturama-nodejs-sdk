import { IReceptor } from "../../../abstractions";
import { Nacional, Extranjero } from "./";
export declare class Receptor implements IReceptor {
    Nacional: Nacional;
    Nacionalidad: string;
    Extranjero: Extranjero;
    constructor(receptor: IReceptor);
    json(): any;
}
