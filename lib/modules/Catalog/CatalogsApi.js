"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../../client/Client");
class CatalogsApi {
    _client;
    /**
     * CatalogApi Constructor
     * @param {ClientConfig} config
     * @return {CatalogsApi}
     */
    constructor(config) {
        this._client = new Client_1.Client(config);
    }
    /**
     * Return States by country code
     * @param {string} country
     * @return {any}
     */
    async States(country) {
        return this._client.request({
            path: `catalogs/municipalities?countryCode=${country}`,
        });
    }
    /**
     * Returns Municipalities by state
     * @param {string} state
     * @return {any}
     */
    async Municipalities(state) {
        return this._client.request({
            path: `catalogs/municipalities?stateCode=${state}`
        });
    }
    /**
     * Returns Localities by state
     * @param {string} state
     * @return {any}
     */
    async Localities(state) {
        return this._client.request({
            path: `catalogs/localities?stateCode=${state}`
        });
    }
    /**
     * Returns Neighborhoods by postal code
     * @param {string} postalCode
     * @return {any}
     */
    async Neighborhoods(postalCode) {
        return this._client.request({
            path: `catalogs/neighborhoods?postalCode=${postalCode}`
        });
    }
    /**
     * Returns ProductsOrServices by keyword
     * @param {string} keyword
     * @return {any}
     */
    async ProductsOrServices(keyword) {
        return this._client.request({
            path: `catalogs/ProductsOrServices?keyword=${keyword}`
        });
    }
    /**
     * Returns PostalCodes by keyword
     * @param {string} keyword
     * @return {any}
     */
    async PostalCodes(keyword) {
        return this._client.request({
            path: `catalogs/PostalCodes?keyword=${keyword}`
        });
    }
    /**
     * Returns Units
     * @return {any}
     */
    async Units() {
        return this._client.request({
            path: `catalogs/Units`
        });
    }
    /**
     * Returns Currencies
     * @return {any}
     */
    async Currencies() {
        return this._client.request({
            path: `catalogs/Currencies`
        });
    }
    /**
     * Returns PaymentForms
     * @return {any}
     */
    async PaymentForms() {
        return this._client.request({
            path: `catalogs/PaymentForms`
        });
    }
    /**
     * Returns PaymentMethods
     * @return {any}
     */
    async PaymentMethods() {
        return this._client.request({
            path: `catalogs/PaymentMethods`
        });
    }
    /**
     * Returns FederalTaxes
     * @return {any}
     */
    async FederalTaxes() {
        return this._client.request({
            path: `catalogs/FederalTaxes`
        });
    }
    /**
     * Returns FiscalRegimens
     * @return {any}
     */
    async FiscalRegimens() {
        return this._client.request({
            path: `catalogs/FiscalRegimens`
        });
    }
    /**
     * Returns CfdiTypes
     * @return {any}
     */
    async CfdiTypes() {
        return this._client.request({
            path: `catalogs/CfdiTypes`
        });
    }
    /**
     * Returns RelationTypes
     * @return {any}
     */
    async RelationTypes() {
        return this._client.request({
            path: `catalogs/RelationTypes`
        });
    }
    /**
     * Returns CfdiUses by keyword
     * @param {string} keyword
     * @return {any}
     */
    async CfdiUses(keyword) {
        return this._client.request({
            path: `catalogs/CfdiUses?keyword=${keyword}`
        });
    }
}
exports.default = CatalogsApi;
