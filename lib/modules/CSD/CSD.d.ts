import { ICSD } from "../../abstractions/csd/ICSD";
export default class CSD implements ICSD {
    Rfc: string;
    Certificate: string;
    PrivateKey: string;
    PrivateKeyPassword: string;
    constructor(csd: ICSD);
    /**
     * Returns a JSON representation of the class
     * @return {any}
     */
    json(): any;
}
