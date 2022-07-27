import {Client} from "../../client/Client";
import {ClientConfig} from "../../client/ClientConfig";
import {RequestConfig} from "../../client/RequestConfig";

export default class CatalogApi {

    private _client: Client;

    constructor(config: ClientConfig) {
        this._client = new Client(config)
    }

    public async States(country: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/municipalities?countryCode=${country}`,
        });
    }

    public async Municipalities(state: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/municipalities?stateCode=${state}`
        });
    }

    public async Localities(state: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/localities?stateCode=${state}`
        });
    }

    public async Neighborhoods(postalCode: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/neighborhoods?postalCode=${postalCode}`
        });
    }

    public async ProductsOrServices(keyword: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/ProductsOrServices?keyword=${keyword}`
        });
    }

    public async PostalCodes(keyword: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/PostalCodes?keyword=${keyword}`
        });
    }

    public async Units(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/Units`
        });
    }

    public async Currencies(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/Currencies`
        });
    }

    public async PaymentForms(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/PaymentForms`
        });
    }

    public async PaymentMethods(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/PaymentMethods`
        });
    }

    public async FederalTaxes(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/FederalTaxes`
        });
    }
    public async FiscalRegimens(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/FiscalRegimens`
        });
    }
    public async CfdiTypes(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/CfdiTypes`
        });
    }
    public async RelationTypes(): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/RelationTypes`
        });
    }
    public async CfdiUses(keyword: string): Promise<any> {
        return this._client.request(<RequestConfig>{
            path: `catalogs/CfdiUses?keyword=${keyword}`
        });
    }


}
