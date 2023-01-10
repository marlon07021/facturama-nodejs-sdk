import { IComplemento } from "../../../abstractions";
import { Intereses, ServiciosPlataformasTecnologicas, TimbreFiscalDigital } from "./";
export declare class Complemento implements IComplemento {
    Intereses: Intereses;
    ServiciosPlataformasTecnologicas: ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital: TimbreFiscalDigital;
    constructor(complemento: IComplemento);
    json(): any;
}
