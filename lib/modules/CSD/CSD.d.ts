import Serializable from "../../abstractions/Serializable";
export default class CSD implements Serializable {
    Rfc: string;
    Certificate: string;
    PrivateKey: string;
    PrivateKeyPassword: string;
    constructor(csd: any);
    json(): any;
}
