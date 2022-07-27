import { ClientConfig } from "../../client/ClientConfig";
import CSD from "./CSD";
export default class CSDApi {
    private _client;
    constructor(config: ClientConfig);
    Get(rfc: string): Promise<any>;
    List(params?: any): Promise<any>;
    Create(csd: CSD): Promise<any>;
    Update(rfc: string, csd: CSD): Promise<any>;
    Remove(rfc: string): Promise<any>;
}
