import { ClientConfig } from '../../client/ClientConfig';
import Retencion from './Retencion';
export default class RetentionApi {
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
     * Create Retencion
     * @param {Retencion} retencion
     * @return {any}
     */
    Create(retencion: Retencion): Promise<any>;
    /**
     * Send Retencion by email
     * @param {any} params
     * @return {any}
     */
    Send(params?: any): Promise<any>;
    /**
     * Cancel Retencion
     * @param {any} params
     * @return {any}
     */
    Cancel(params?: any): Promise<any>;
    /**
     * Download Retencion
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    Download(format: string, type: string, id: string): Promise<any>;
}
