import { ClientConfig } from "../../client/ClientConfig";
import { CSDInterface } from "../../abstractions/CSD.interface";
export default class CSDApi {
    private _client;
    /**
     * CSDApi Constructor
     * @param {ClientConfig} config
     * @return {CSDApi}
     */
    constructor(config: ClientConfig);
    /**
     * Get CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    Get(rfc: string): Promise<any>;
    /**
     * Get CSD by params
     * @param {any} params
     * @return {any}
     */
    List(params?: any): Promise<any>;
    /**
     * Create CSD
     * @param {CSDInterface} csd
     * @return {any}
     */
    Create(csd: CSDInterface): Promise<any>;
    /**
     * Update CSD by RFC
     * @param {string} rfc
     * @param {CSD} csd
     * @return {any}
     */
    Update(rfc: string, csd: CSDInterface): Promise<any>;
    /**
     * Remove CSD by RFC
     * @param {string} rfc
     * @return {any}
     */
    Remove(rfc: string): Promise<any>;
}
