import { Client } from '../../client/Client';
import { ClientConfig } from '../../client/ClientConfig';
import { encodeParams } from '../../util/qs';
import { HTTP_REQUEST_TYPE } from '../../client/HttpRequestType';
import Retencion from './Retencion';

export default class RetentionApi {
  private _client: Client;

  /**
   * CFDIApi Constructor
   * @param {ClientConfig} config
   * @return {CFDIApi}
   */
  constructor(config: ClientConfig) {
    this._client = new Client(config);
  }

  /**
   * Get CFDI by id
   * @param {string} id
   * @return {any}
   */
  public async Get(id: string): Promise<any> {
    return this._client.request({
      path: `Retenciones/${id}`,
    });
  }

  /**
   * List CFDI by params
   * @param {any} params
   * @return {any}
   */
  public async List(params?: any): Promise<any> {
    let path = `Retenciones`;

    if (params) path = `Retenciones?${encodeParams(params)}`;

    return this._client.request({
      path,
    });
  }

  /**
   * Create Retencion
   * @param {Retencion} retencion
   * @return {any}
   */
  public async Create(retencion: Retencion): Promise<any> {
    return this._client.request({
      type: HTTP_REQUEST_TYPE.POST,
      path: `Retenciones`,
      data: retencion.json(),
    });
  }

  /**
   * Send Retencion by email
   * @param {any} params
   * @return {any}
   */
  public async Send(params?: any): Promise<any> {
    let path = `Retenciones`;

    if (params) path = `Retenciones?${encodeParams(params)}`;

    return this._client.request({
      type: HTTP_REQUEST_TYPE.POST,
      path,
    });
  }

  /**
   * Cancel Retencion
   * @param {any} params
   * @return {any}
   */
  public async Cancel(params?: any): Promise<any> {
    let path = `Retenciones`;

    if (params) path = `Retenciones?${encodeParams(params)}`;

    return this._client.request({
      type: HTTP_REQUEST_TYPE.DELETE,
      path,
    });
  }

  /**
   * Download Retencion
   * @param {string} format
   * @param {string} type
   * @param {string} id
   * @return {any}
   */

  public async Download(format: string, type: string, id: string): Promise<any> {
    return this._client.request({
      path: `Retenciones/${id}/${format}`,
    });
  }
}
