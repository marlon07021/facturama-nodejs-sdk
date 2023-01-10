import { ClientConfig } from './ClientConfig';
import { RequestConfig } from './RequestConfig';
import { DELETE, GET, POST, PUT } from '../util/http';
import { HTTP_REQUEST_TYPE } from './HttpRequestType';

/**
 * Major proxy wrapper for HTTP calls
 */
export class Client {
  private _config: ClientConfig;

  /**
   * Constructor
   * @param {ClientConfig} config
   * @return {Client}
   */
  constructor(config: ClientConfig) {
    this._config = config;
  }

  /**
   * Performs and HTTP request with configuration
   * @param {RequestConfig} request
   * @return {any}
   */

  public async request(request: RequestConfig): Promise<any> {
    try {
      if (!request.type) request.type = HTTP_REQUEST_TYPE.GET;

      if (!request.headers)
        request.headers = {
          'Content-Type': 'application/json',
        };

      if (this._config.authorization) request.headers.Authorization = this._config.authorization;

      if (request.type === HTTP_REQUEST_TYPE.GET) {
        return GET(this._config.url + request.path, request.headers);
      } else if (request.type === HTTP_REQUEST_TYPE.POST) {
        return POST(this._config.url + request.path, request.data, request.headers);
      } else if (request.type === HTTP_REQUEST_TYPE.PUT) {
        return PUT(this._config.url + request.path, request.data, request.headers);
      } else if (request.type === HTTP_REQUEST_TYPE.DELETE) {
        return DELETE(this._config.url + request.path, request.data, request.headers);
      }
    } catch (e) {
      return null;
    }
  }
}
