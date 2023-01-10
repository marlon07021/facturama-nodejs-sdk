import { ISerializable } from '../ISerializable';

export interface ICSD extends ISerializable {
  Rfc: string;
  Certificate: string;
  PrivateKey: string;
  PrivateKeyPassword: string;
}
