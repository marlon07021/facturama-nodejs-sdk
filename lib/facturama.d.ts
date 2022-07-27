import { CFDIApi } from "./modules/CFDI";
import CSDApi from "./modules/CSD/CSDApi";
import CatalogsApi from "./modules/Catalog/CatalogsApi";
export default class FacturamaSDK {
    private _apiUrl;
    private _CDFI;
    private _CSD;
    private _Catalogs;
    private loggedIn;
    get CDFI(): CFDIApi;
    get CSD(): CSDApi;
    get Catalogs(): CatalogsApi;
    constructor(production?: boolean, apiUrl?: string);
    login(username: string, password: string): void;
}
