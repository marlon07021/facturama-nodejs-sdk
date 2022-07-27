"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeParams = void 0;
/**
 * Encode http request params into url friendly string
 * @param {any} object
 * @return {string}
 */
var encodeParams = function (object) {
    return Object.entries(object).map(function (i) { return [i[0], encodeURIComponent(i[1])].join("="); }).join("&");
};
exports.encodeParams = encodeParams;
