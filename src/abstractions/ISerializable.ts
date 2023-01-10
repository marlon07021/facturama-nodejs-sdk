/**
 * Interface forces implementation classes
 * to be represented as a simple JSON object
 */
export interface ISerializable {
  json(): any;
}
