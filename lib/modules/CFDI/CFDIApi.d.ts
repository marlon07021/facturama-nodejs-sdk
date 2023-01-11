import { ClientConfig } from '../../client/ClientConfig';
import { CFDIv4 } from './CFDI.v4';
export default class CFDIApi {
    private _client;
    /**
     * CFDIApi Constructor
     * @param {ClientConfig} config
     * @return {CFDIApi}
     */
    constructor(config: ClientConfig);
    /**
     * Get CFDI by id
     * @param {string} id
     * @return {any}
     */
    Get(id: string): Promise<any>;
    /**
     * List CFDI by params
     * @param {any} params
     * @return {any}
     */
    List(params?: any): Promise<any>;
    /**
     * Create CFDI
     * @param {CFDIv4} cfdIv4
     * @return {any}
     */
    Create(cfdIv4: CFDIv4): Promise<any>;
    /**
     * Send CFDI
     * @param {any} params
     * @return {any}
     */
    Send(params?: any): Promise<any>;
    /**
     * Cancel CFDI
     * @param {any} params
     * @return {any}
     */
    Cancel(params?: any): Promise<any>;
    /**
     * Download CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    Download(format: string, type: string, id: string): Promise<any>;
    /**
     * Acuse CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    Acuse(format: string, type: string, id: string): Promise<any>;
}
