import { CSDInterface } from "../../abstractions/CSD.interface";
export default class CSD implements CSDInterface {
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
