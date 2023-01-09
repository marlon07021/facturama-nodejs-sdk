import {IReceptor} from "../../abstractions";
import {IExtranjero, INacional} from "../../abstractions/retenciones/IReceptor";

export class Nacional implements INacional {
    public RfcRecep: string;
    public NomDenRazSocR: string;
    public CurpR: string;

    constructor(nacional: INacional) {
        this.RfcRecep = nacional.RfcRecep;
        this.NomDenRazSocR = nacional.NomDenRazSocR;
        this.CurpR = nacional.CurpR;
    }

    json(): any {
        return {
            RfcRecep: this.RfcRecep,
            NomDenRazSocR: this.NomDenRazSocR,
            CurpR: this.CurpR
        }
    }
}

export class Extranjero implements IExtranjero {
    NomDenRazSocR: string;
    NumRegIdTrib: string;

    constructor(extranjero: IExtranjero) {
        this.NomDenRazSocR = extranjero.NomDenRazSocR;
        this.NumRegIdTrib = extranjero.NumRegIdTrib;
    }

    json(): any {
        return {
            NomDenRazSocR: this.NomDenRazSocR,
            NumRegIdTrib: this.NumRegIdTrib
        }
    }

}
export default class Receptor implements IReceptor{
    Nacional: Nacional;
    Nacionalidad: string;

    Extranjero: Extranjero;

    constructor(receptor: IReceptor) {
        this.Nacionalidad = receptor.Nacionalidad;
        this.Nacional = new Nacional(receptor.Nacional);
        this.Extranjero = new Extranjero(receptor.Extranjero);
    }

    json(): any {
        return {
            Nacionalidad: this.Nacionalidad,
            Nacional: this.Nacional.json(),
            Extranjero: this.Extranjero.json()
        }
    }



}
