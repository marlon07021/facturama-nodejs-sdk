import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {RequestConfig} from "../../client/RequestConfig";

export default class CatalogsApi {

    private _client: Client;

    /**
     * CatalogApi Constructor
     * @param {ClientConfig} config
     * @return {CatalogsApi}
     */
    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    /**
     * Return States by country code
     * @param {string} country
     * @return {any}
     */
    public async States(country: string): Promise<any> {
        return this._client.request({
            path: `catalogs/municipalities?countryCode=${country}`,
        });
    }

    /**
     * Returns Municipalities by state
     * @param {string} state
     * @return {any}
     */
    public async Municipalities(state: string): Promise<any> {
        return this._client.request({
            path: `catalogs/municipalities?stateCode=${state}`
        });
    }

    /**
     * Returns Localities by state
     * @param {string} state
     * @return {any}
     */

    public async Localities(state: string): Promise<any> {
        return this._client.request({
            path: `catalogs/localities?stateCode=${state}`
        });
    }

    /**
     * Returns Neighborhoods by postal code
     * @param {string} postalCode
     * @return {any}
     */
    public async Neighborhoods(postalCode: string): Promise<any> {
        return this._client.request({
            path: `catalogs/neighborhoods?postalCode=${postalCode}`
        });
    }

    /**
     * Returns ProductsOrServices by keyword
     * @param {string} keyword
     * @return {any}
     */
    public async ProductsOrServices(keyword: string): Promise<any> {
        return this._client.request({
            path: `catalogs/ProductsOrServices?keyword=${keyword}`
        });
    }

    /**
     * Returns PostalCodes by keyword
     * @param {string} keyword
     * @return {any}
     */
    public async PostalCodes(keyword: string): Promise<any> {
        return this._client.request({
            path: `catalogs/PostalCodes?keyword=${keyword}`
        });
    }


    /**
     * Returns Units
     * @return {any}
     */
    public async Units(): Promise<any> {
        return this._client.request({
            path: `catalogs/Units`
        });
    }

    /**
     * Returns Currencies
     * @return {any}
     */
    public async Currencies(): Promise<any> {
        return this._client.request({
            path: `catalogs/Currencies`
        });
    }

    /**
     * Returns PaymentForms
     * @return {any}
     */
    public async PaymentForms(): Promise<any> {
        return this._client.request({
            path: `catalogs/PaymentForms`
        });
    }

    /**
     * Returns PaymentMethods
     * @return {any}
     */
    public async PaymentMethods(): Promise<any> {
        return this._client.request({
            path: `catalogs/PaymentMethods`
        });
    }

    /**
     * Returns FederalTaxes
     * @return {any}
     */
    public async FederalTaxes(): Promise<any> {
        return this._client.request({
            path: `catalogs/FederalTaxes`
        });
    }

    /**
     * Returns FiscalRegimens
     * @return {any}
     */
    public async FiscalRegimens(): Promise<any> {
        return this._client.request({
            path: `catalogs/FiscalRegimens`
        });
    }

    /**
     * Returns CfdiTypes
     * @return {any}
     */
    public async CfdiTypes(): Promise<any> {
        return this._client.request({
            path: `catalogs/CfdiTypes`
        });
    }

    /**
     * Returns RelationTypes
     * @return {any}
     */
    public async RelationTypes(): Promise<any> {
        return this._client.request({
            path: `catalogs/RelationTypes`
        });
    }

    /**
     * Returns CfdiUses by keyword
     * @param {string} keyword
     * @return {any}
     */
    public async CfdiUses(keyword: string): Promise<any> {
        return this._client.request({
            path: `catalogs/CfdiUses?keyword=${keyword}`
        });
    }


}
