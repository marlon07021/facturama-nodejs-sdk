import Serializable from "../../abstractions/Serializable";
import {CSDInterface} from "../../abstractions/CSD.interface";

export default class CSD implements CSDInterface {
    public Rfc: string;
    public Certificate: string;
    public PrivateKey: string;
    public PrivateKeyPassword: string;

    constructor(csd: any) {
        this.Rfc = csd.Rfc;
        this.Certificate = csd.Certificate;
        this.PrivateKey = csd.PrivateKey;
        this.PrivateKeyPassword = csd.PrivateKeyPassword;
    }

    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    public json(): any {
        return {
            Rfc: this.Rfc,
            Certificate: this.Certificate,
            PrivateKey: this.PrivateKey,
            PrivateKeyPassword: this.PrivateKeyPassword
        }
    }
}
