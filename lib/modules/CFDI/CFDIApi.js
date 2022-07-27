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
var qs_1 = require("../../util/qs");
var HttpRequestType_1 = require("../../client/HttpRequestType");
var CFDIApi = /** @class */ (function () {
    /**
     * CFDIApi Constructor
     * @param {ClientConfig} config
     * @return {CFDIApi}
     */
    function CFDIApi(config) {
        this._client = new Client_1.Client(config);
    }
    /**
     * Get CFDI by id
     * @param {string} id
     * @return {any}
     */
    CFDIApi.prototype.Get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "api-lite/cfdis/".concat(id),
                    })];
            });
        });
    };
    /**
     * List CFDI by params
     * @param {any} params
     * @return {any}
     */
    CFDIApi.prototype.List = function (params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                path = "api-lite/cfdis";
                if (params)
                    path = "api-lite/cfdis?".concat((0, qs_1.encodeParams)(params));
                return [2 /*return*/, this._client.request({
                        path: path
                    })];
            });
        });
    };
    /**
     * Create CFDI
     * @param {CFDIv4} cfdIv4
     * @return {any}
     */
    CFDIApi.prototype.Create = function (cfdIv4) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
                        path: "api-lite/2/cfdis",
                        data: cfdIv4.json(),
                    })];
            });
        });
    };
    /**
     * Send CFDI
     * @param {any} params
     * @return {any}
     */
    CFDIApi.prototype.Send = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                path = "cfdi";
                if (params)
                    path = "cfdi?".concat((0, qs_1.encodeParams)(params));
                return [2 /*return*/, this._client.request({
                        type: HttpRequestType_1.HTTP_REQUEST_TYPE.POST,
                        path: path
                    })];
            });
        });
    };
    /**
     * Cancel CFDI
     * @param {any} params
     * @return {any}
     */
    CFDIApi.prototype.Cancel = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var path;
            return __generator(this, function (_a) {
                path = "api-lite/cfdis";
                if (params)
                    path = "api-lite/cfdis?".concat((0, qs_1.encodeParams)(params));
                return [2 /*return*/, this._client.request({
                        type: HttpRequestType_1.HTTP_REQUEST_TYPE.DELETE,
                        path: path
                    })];
            });
        });
    };
    /**
     * Download CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    CFDIApi.prototype.Download = function (format, type, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "cfdi/".concat(format, "/").concat(type, "/").concat(id),
                    })];
            });
        });
    };
    /**
     * Acuse CFDI
     * @param {string} format
     * @param {string} type
     * @param {string} id
     * @return {any}
     */
    CFDIApi.prototype.Acuse = function (format, type, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this._client.request({
                        path: "acuse/".concat(format, "/").concat(type, "/").concat(id),
                    })];
            });
        });
    };
    return CFDIApi;
}());
exports.default = CFDIApi;
