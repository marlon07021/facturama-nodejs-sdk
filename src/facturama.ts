import {Config} from "./config";
import {CFDIApi} from "./modules/CFDI";
import CSDApi from "./modules/CSD/CSDApi";
import CatalogsApi from "./modules/Catalog/CatalogsApi";
import {Client} from "./client/Client";
import {encodeBase64} from "./util/base64";
import {ClientConfig} from "./client/ClientConfig";
import {NotInitializedError} from "./abstractions/NotInitializedError";

export default class FacturamaSDK {

    private _apiUrl: string;

    private _CDFI: CFDIApi | null = null;
    private _CSD: CSDApi | null = null;
    private _Catalogs: CatalogsApi | null = null;

    private loggedIn: boolean = false;

    /**
     * Get CFDIApi instance if logged in or Error if not
     * @return {CFDIApi}
     * @return {NotInitializedError}
     */
    public get CDFI(): CFDIApi {
        if ( this.loggedIn && this._CDFI )
            return this._CDFI;
        else
            throw new NotInitializedError();

    };

    /**
     * Get CSDApi instance if logged in or Error if not
     * @return {CSDApi}
     * @return {NotInitializedError}
     */
    public get CSD(): CSDApi {
        if ( this.loggedIn && this._CSD )
            return this._CSD;
        else
            throw new NotInitializedError();

    };

    /**
     * Get CatalogsApi instance if logged in or Error if not
     * @return {CatalogsApi}
     * @return {NotInitializedError}
     */
    public get Catalogs(): CatalogsApi {
        if ( this.loggedIn && this._Catalogs )
            return this._Catalogs;
        else
            throw new NotInitializedError();

    };


    /**
     * Create new instance of the SDK with production, sandbox or custom API endpoint
     * @param {boolean} production
     * @param {string?} apiUrl
     * @return {Client}
     */
    constructor(production: boolean = false, apiUrl?: string) {
        if (apiUrl) {
            this._apiUrl = apiUrl;
        } else {
            if (production)
                this._apiUrl = Config.production.apiUrl;
            else
                this._apiUrl = Config.sandbox.apiUrl;
        }
    }

    /**
     * Initializes the SDK for client user credentials and allows to use the API proxies
     * @param {string} username
     * @param {string} password
     * @return {FacturamaSDK}
     */
    public login(username: string, password: string): FacturamaSDK{
        const authorization = encodeBase64(username + ':' + password);
        const clientConfig = {
            url: this._apiUrl,
            authorization: 'Basic ' + authorization
        };
        this._CDFI = new CFDIApi(clientConfig);
        this._CSD = new CSDApi(clientConfig);
        this._Catalogs = new CatalogsApi(clientConfig);

        this.loggedIn = true;

        return this;
    }

}
