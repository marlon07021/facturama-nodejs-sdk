import { ClientConfig } from "../../client/ClientConfig";
import { CFDIv4 } from "./CFDI.v4";
export default class CFDIApi {
    private _client;
    constructor(config: ClientConfig);
    Get(id: string): Promise<any>;
    List(params?: any): Promise<any>;
    Create(cfdIv4: CFDIv4): Promise<any>;
    Send(params?: any): Promise<any>;
    Cancel(params?: any): Promise<any>;
    Download(format: string, type: string, id: string): Promise<any>;
    Acuse(format: string, type: string, id: string): Promise<any>;
}
