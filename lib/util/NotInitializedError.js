"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotInitializedError = void 0;
const ThrownError_1 = require("../abstractions/ThrownError");
class NotInitializedError extends ThrownError_1.ThrownError {
    constructor() {
        super('Class was not correctly initialized');
    }
}
exports.NotInitializedError = NotInitializedError;
