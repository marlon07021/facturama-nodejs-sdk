import Serializable from "./Serializable";

export interface CSDInterface extends Serializable{
    Rfc: string;
    Certificate: string;
    PrivateKey: string;
    PrivateKeyPassword: string;
}
