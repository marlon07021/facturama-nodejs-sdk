"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var CFDI_1 = require("./modules/CFDI");
var CSDApi_1 = require("./modules/CSD/CSDApi");
var CatalogsApi_1 = require("./modules/Catalog/CatalogsApi");
var base64_1 = require("./util/base64");
var FacturamaSDK = /** @class */ (function () {
    function FacturamaSDK(production, apiUrl) {
        if (production === void 0) { production = false; }
        this._CDFI = null;
        this._CSD = null;
        this._Catalogs = null;
        this.loggedIn = false;
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
    Object.defineProperty(FacturamaSDK.prototype, "CDFI", {
        get: function () {
            if (this.loggedIn && this._CDFI)
                return this._CDFI;
            else
                throw Error('You need to call login method with username and password first');
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FacturamaSDK.prototype, "CSD", {
        get: function () {
            if (this.loggedIn && this._CSD)
                return this._CSD;
            else
                throw Error('You need to call login method with username and password first');
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(FacturamaSDK.prototype, "Catalogs", {
        get: function () {
            if (this.loggedIn && this._Catalogs)
                return this._Catalogs;
            else
                throw Error('You need to call login method with username and password first');
        },
        enumerable: false,
        configurable: true
    });
    ;
    FacturamaSDK.prototype.login = function (username, password) {
        var authorization = (0, base64_1.encodeBase64)(username + ':' + password);
        var clientConfig = {
            url: this._apiUrl,
            authorization: 'Basic ' + authorization
        };
        this._CDFI = new CFDI_1.CFDIApi(clientConfig);
        this._CSD = new CSDApi_1.default(clientConfig);
        this._Catalogs = new CatalogsApi_1.default(clientConfig);
        this.loggedIn = true;
    };
    return FacturamaSDK;
}());
exports.default = FacturamaSDK;
