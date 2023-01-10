import { ISerializable } from '../index';

export interface INacional extends ISerializable {
  RfcRecep: string;
  NomDenRazSocR: string;
  CurpR: string;
}

export interface IExtranjero extends ISerializable {
  NumRegIdTrib: string;
  NomDenRazSocR: string;
}
export interface IReceptor extends ISerializable {
  Nacionalidad: string;
  Nacional: INacional;
  Extranjero: IExtranjero;
}
