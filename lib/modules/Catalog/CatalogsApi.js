"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Client_1 = require("../../client/Client");
var CatalogsApi = /** @class */ (function () {
    /**
     * CatalogApi Constructor
     * @param {ClientConfig} config
     * @return {CatalogsApi}
     */
    function CatalogsApi(config) {
        this._client = new Client_1.Client(config);
    }
    /**
     * Return States by country code
     * @param {string} country
     * @return {any}
     */
    CatalogsApi.prototype.States = function (country) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/municipalities?countryCode=".concat(country),
                    })];
            });
        });
    };
    /**
     * Returns Municipalities by state
     * @param {string} state
     * @return {any}
     */
    CatalogsApi.prototype.Municipalities = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/municipalities?stateCode=".concat(state)
                    })];
            });
        });
    };
    /**
     * Returns Localities by state
     * @param {string} state
     * @return {any}
     */
    CatalogsApi.prototype.Localities = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/localities?stateCode=".concat(state)
                    })];
            });
        });
    };
    /**
     * Returns Neighborhoods by postal code
     * @param {string} postalCode
     * @return {any}
     */
    CatalogsApi.prototype.Neighborhoods = function (postalCode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/neighborhoods?postalCode=".concat(postalCode)
                    })];
            });
        });
    };
    /**
     * Returns ProductsOrServices by keyword
     * @param {string} keyword
     * @return {any}
     */
    CatalogsApi.prototype.ProductsOrServices = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/ProductsOrServices?keyword=".concat(keyword)
                    })];
            });
        });
    };
    /**
     * Returns PostalCodes by keyword
     * @param {string} keyword
     * @return {any}
     */
    CatalogsApi.prototype.PostalCodes = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/PostalCodes?keyword=".concat(keyword)
                    })];
            });
        });
    };
    /**
     * Returns Units
     * @return {any}
     */
    CatalogsApi.prototype.Units = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/Units"
                    })];
            });
        });
    };
    /**
     * Returns Currencies
     * @return {any}
     */
    CatalogsApi.prototype.Currencies = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/Currencies"
                    })];
            });
        });
    };
    /**
     * Returns PaymentForms
     * @return {any}
     */
    CatalogsApi.prototype.PaymentForms = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/PaymentForms"
                    })];
            });
        });
    };
    /**
     * Returns PaymentMethods
     * @return {any}
     */
    CatalogsApi.prototype.PaymentMethods = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/PaymentMethods"
                    })];
            });
        });
    };
    /**
     * Returns FederalTaxes
     * @return {any}
     */
    CatalogsApi.prototype.FederalTaxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/FederalTaxes"
                    })];
            });
        });
    };
    /**
     * Returns FiscalRegimens
     * @return {any}
     */
    CatalogsApi.prototype.FiscalRegimens = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/FiscalRegimens"
                    })];
            });
        });
    };
    /**
     * Returns CfdiTypes
     * @return {any}
     */
    CatalogsApi.prototype.CfdiTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/CfdiTypes"
                    })];
            });
        });
    };
    /**
     * Returns RelationTypes
     * @return {any}
     */
    CatalogsApi.prototype.RelationTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/RelationTypes"
                    })];
            });
        });
    };
    /**
     * Returns CfdiUses by keyword
     * @param {string} keyword
     * @return {any}
     */
    CatalogsApi.prototype.CfdiUses = function (keyword) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "catalogs/CfdiUses?keyword=".concat(keyword)
                    })];
            });
        });
    };
    return CatalogsApi;
}());
exports.default = CatalogsApi;
