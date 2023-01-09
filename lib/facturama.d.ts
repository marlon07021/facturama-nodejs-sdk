import { CFDIApi, RetentionApi } from "./modules/CFDI";
import CSDApi from "./modules/CSD/CSDApi";
import CatalogsApi from "./modules/Catalog/CatalogsApi";
export default class FacturamaSDK {
    private _apiUrl;
    private _CDFI;
    private _Retentions;
    private _CSD;
    private _Catalogs;
    private loggedIn;
    /**
     * Get API url
     * @return {string} ApiUrl
     */
    get ApiUrl(): string;
    /**
     * Get CFDIApi instance if logged in or Error if not
     * @return {CFDIApi}
     * @return {NotInitializedError}
     */
    get CDFI(): CFDIApi;
    /**
     * Get RetentionApi instance if logged in or Error if not
     * @return {RetentionApi}
     * @return {NotInitializedError}
     */
    get Retenciones(): RetentionApi;
    /**
     * Get CSDApi instance if logged in or Error if not
     * @return {CSDApi}
     * @return {NotInitializedError}
     */
    get CSD(): CSDApi;
    /**
     * Get CatalogsApi instance if logged in or Error if not
     * @return {CatalogsApi}
     * @return {NotInitializedError}
     */
    get Catalogs(): CatalogsApi;
    /**
     * Create new instance of the SDK with production, sandbox or custom API endpoint
     * @param {boolean} production
     * @param {string?} apiUrl
     * @return {Client}
     */
    constructor(production?: boolean, apiUrl?: string);
    /**
     * Initializes the SDK for client user credentials and allows to use the API proxies
     * @param {string} username
     * @param {string} password
     * @return {FacturamaSDK}
     */
    login(username: string, password: string): FacturamaSDK;
}
