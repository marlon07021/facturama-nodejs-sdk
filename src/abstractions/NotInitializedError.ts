import {ThrownError} from "./ThrownError";

export class NotInitializedError extends ThrownError {
    constructor() {
        super('Class was not correctly initialized');
    }
}
