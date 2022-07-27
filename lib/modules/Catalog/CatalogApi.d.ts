import { ClientConfig } from "../../client/ClientConfig";
export default class CatalogApi {
    private _client;
    constructor(config: ClientConfig);
    States(country: string): Promise<any>;
    Municipalities(state: string): Promise<any>;
    Localities(state: string): Promise<any>;
    Neighborhoods(postalCode: string): Promise<any>;
    ProductsOrServices(keyword: string): Promise<any>;
    PostalCodes(keyword: string): Promise<any>;
    Units(): Promise<any>;
    Currencies(): Promise<any>;
    PaymentForms(): Promise<any>;
    PaymentMethods(): Promise<any>;
    FederalTaxes(): Promise<any>;
    FiscalRegimens(): Promise<any>;
    CfdiTypes(): Promise<any>;
    RelationTypes(): Promise<any>;
    CfdiUses(keyword: string): Promise<any>;
}
