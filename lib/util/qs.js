"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeParams = void 0;
var encodeParams = function (object) {
    return Object.entries(object).map(function (i) { return [i[0], encodeURIComponent(i[1])].join("="); }).join("&");
};
exports.encodeParams = encodeParams;
