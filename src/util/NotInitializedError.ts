import { ThrownError } from '../abstractions/ThrownError';

export class NotInitializedError extends ThrownError {
  constructor() {
    super('Class was not correctly initialized');
  }
}
