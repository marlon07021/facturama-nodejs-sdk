import {Config} from "./config";
import {CFDIApi} from "./modules/CFDI";
import CSDApi from "./modules/CSD/CSDApi";
import CatalogApi from "./modules/Catalog/CatalogApi";
import {Client} from "./client/Client";
import {encodeBase64} from "./util/base64";
import {ClientConfig} from "./client/ClientConfig";

export default class FacturamaSDK {

    private _apiUrl: string;

    public CDFI: CFDIApi;
    public CSD: CSDApi;
    public Catalogs: CatalogApi;


    constructor(production: boolean = false, apiUrl?: string) {
        if ( apiUrl ) {
            this._apiUrl = apiUrl;
        } else {
            if ( production )
                this._apiUrl = Config.production.apiUrl;
            else
                this._apiUrl = Config.sandbox.apiUrl;
        }
    }

    public login(username: string, password: string) {
        const authorization = encodeBase64(username + ':' + password);
        const clientConfig = <ClientConfig>{
            url: this._apiUrl,
            authorization: 'Basic ' + authorization
        };
        this.CDFI = new CFDIApi(clientConfig);
        this.CSD = new CSDApi(clientConfig);
        this.Catalogs = new CatalogApi(clientConfig);
    }

}
