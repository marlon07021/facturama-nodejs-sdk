import {ISerializable} from "../ISerializable";


export interface IEmisor extends ISerializable {
    RfcEmisor: string;
    NomDenRazSocE: string;
    CurpE: string;
}
