"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const CFDI_1 = require("./modules/CFDI");
const CSDApi_1 = __importDefault(require("./modules/CSD/CSDApi"));
const CatalogsApi_1 = __importDefault(require("./modules/Catalog/CatalogsApi"));
const base64_1 = require("./util/base64");
const NotInitializedError_1 = require("./util/NotInitializedError");
class FacturamaSDK {
    _apiUrl;
    _CDFI = null;
    _CSD = null;
    _Catalogs = null;
    loggedIn = false;
    /**
     * Get CFDIApi instance if logged in or Error if not
     * @return {CFDIApi}
     * @return {NotInitializedError}
     */
    get CDFI() {
        if (this.loggedIn && this._CDFI)
            return this._CDFI;
        else
            throw new NotInitializedError_1.NotInitializedError();
    }
    ;
    /**
     * Get CSDApi instance if logged in or Error if not
     * @return {CSDApi}
     * @return {NotInitializedError}
     */
    get CSD() {
        if (this.loggedIn && this._CSD)
            return this._CSD;
        else
            throw new NotInitializedError_1.NotInitializedError();
    }
    ;
    /**
     * Get CatalogsApi instance if logged in or Error if not
     * @return {CatalogsApi}
     * @return {NotInitializedError}
     */
    get Catalogs() {
        if (this.loggedIn && this._Catalogs)
            return this._Catalogs;
        else
            throw new NotInitializedError_1.NotInitializedError();
    }
    ;
    /**
     * Create new instance of the SDK with production, sandbox or custom API endpoint
     * @param {boolean} production
     * @param {string?} apiUrl
     * @return {Client}
     */
    constructor(production = false, apiUrl) {
        if (apiUrl) {
            this._apiUrl = apiUrl;
        }
        else {
            if (production)
                this._apiUrl = config_1.Config.production.apiUrl;
            else
                this._apiUrl = config_1.Config.sandbox.apiUrl;
        }
    }
    /**
     * Initializes the SDK for client user credentials and allows to use the API proxies
     * @param {string} username
     * @param {string} password
     * @return {FacturamaSDK}
     */
    login(username, password) {
        const authorization = (0, base64_1.encodeBase64)(username + ':' + password);
        const clientConfig = {
            url: this._apiUrl,
            authorization: 'Basic ' + authorization
        };
        this._CDFI = new CFDI_1.CFDIApi(clientConfig);
        this._CSD = new CSDApi_1.default(clientConfig);
        this._Catalogs = new CatalogsApi_1.default(clientConfig);
        this.loggedIn = true;
        return this;
    }
}
exports.default = FacturamaSDK;
