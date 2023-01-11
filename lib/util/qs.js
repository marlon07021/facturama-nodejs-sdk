"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeParams = void 0;
/**
 * Encode http request params into url friendly string
 * @param {any} object
 * @return {string}
 */
const encodeParams = (object) => Object.entries(object)
    .map((i) => [i[0], encodeURIComponent(i[1])].join('='))
    .join('&');
exports.encodeParams = encodeParams;
