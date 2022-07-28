import Serializable from "../../abstractions/Serializable";
export default class CSD implements Serializable {
    Rfc: string;
    Certificate: string;
    PrivateKey: string;
    PrivateKeyPassword: string;
    constructor(csd: any);
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    json(): any;
}
