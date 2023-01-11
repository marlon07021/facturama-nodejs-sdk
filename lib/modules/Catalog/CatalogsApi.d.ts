import { ClientConfig } from '../../client/ClientConfig';
export default class CatalogsApi {
    private _client;
    /**
     * CatalogApi Constructor
     * @param {ClientConfig} config
     * @return {CatalogsApi}
     */
    constructor(config: ClientConfig);
    /**
     * Return States by country code
     * @param {string} country
     * @return {any}
     */
    States(country: string): Promise<any>;
    /**
     * Returns Municipalities by state
     * @param {string} state
     * @return {any}
     */
    Municipalities(state: string): Promise<any>;
    /**
     * Returns Localities by state
     * @param {string} state
     * @return {any}
     */
    Localities(state: string): Promise<any>;
    /**
     * Returns Neighborhoods by postal code
     * @param {string} postalCode
     * @return {any}
     */
    Neighborhoods(postalCode: string): Promise<any>;
    /**
     * Returns ProductsOrServices by keyword
     * @param {string} keyword
     * @return {any}
     */
    ProductsOrServices(keyword: string): Promise<any>;
    /**
     * Returns PostalCodes by keyword
     * @param {string} keyword
     * @return {any}
     */
    PostalCodes(keyword: string): Promise<any>;
    /**
     * Returns Units
     * @return {any}
     */
    Units(): Promise<any>;
    /**
     * Returns Currencies
     * @return {any}
     */
    Currencies(): Promise<any>;
    /**
     * Returns PaymentForms
     * @return {any}
     */
    PaymentForms(): Promise<any>;
    /**
     * Returns PaymentMethods
     * @return {any}
     */
    PaymentMethods(): Promise<any>;
    /**
     * Returns FederalTaxes
     * @return {any}
     */
    FederalTaxes(): Promise<any>;
    /**
     * Returns FiscalRegimens
     * @return {any}
     */
    FiscalRegimens(): Promise<any>;
    /**
     * Returns CfdiTypes
     * @return {any}
     */
    CfdiTypes(): Promise<any>;
    /**
     * Returns RelationTypes
     * @return {any}
     */
    RelationTypes(): Promise<any>;
    /**
     * Returns CfdiUses by keyword
     * @param {string} keyword
     * @return {any}
     */
    CfdiUses(keyword: string): Promise<any>;
}
