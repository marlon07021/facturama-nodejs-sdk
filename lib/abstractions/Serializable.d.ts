/**
 * Interface forces implementation classes
 * to be represented as a simple JSON object
 */
export default interface Serializable {
    json(): any;
}
