"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrownError = void 0;
class ThrownError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.ThrownError = ThrownError;
