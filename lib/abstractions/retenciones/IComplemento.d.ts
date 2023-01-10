import { ISerializable } from "../ISerializable";
import { IServiciosPlataformasTecnologicas } from "./IServiciosPlataformasTecnologicas";
import { ITimbreFiscalDigital } from "./ITimbreFiscalDigital";
import { IIntereses } from "./IIntereses";
export interface IComplemento extends ISerializable {
    ServiciosPlataformasTecnologicas: IServiciosPlataformasTecnologicas;
    "TimbreFiscalDigital": ITimbreFiscalDigital;
    "Intereses": IIntereses;
}
