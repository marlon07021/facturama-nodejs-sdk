/**
 * CDFI v4
 */
import { Issuer, Item, Receiver } from '../../modules/CFDI';
import { ISerializable } from '../ISerializable';

export interface ICFDIv4 extends ISerializable {
  Serie: string;
  Currency: string;
  ExpeditionPlace: string;
  PaymentConditions: string;
  Folio: string;
  CfdiType: string;
  PaymentForm: string;
  PaymentMethod: string;
  Issuer: Issuer;
  Receiver: Receiver;
  Items: Item[];
}
