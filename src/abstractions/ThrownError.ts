export abstract class ThrownError extends Error {
    constructor(message: string) {
        super(message);
    }
}
