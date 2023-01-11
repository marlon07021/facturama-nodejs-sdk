import { IComplemento } from '../../../abstractions';
import { Intereses } from './Intereses';
import { ServiciosPlataformasTecnologicas } from './ServiciosPlataformasTecnologicas';
import { TimbreFiscalDigital } from './TimbreFiscalDigital';
export declare class Complemento implements IComplemento {
    Intereses: Intereses;
    ServiciosPlataformasTecnologicas: ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital: TimbreFiscalDigital;
    constructor(complemento: IComplemento);
    json(): any;
}
