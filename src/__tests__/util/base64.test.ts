import {encodeBase64, decodeBase64} from "../../util/base64";

test('base64', () => {
    const testString = 'abc';
    const encoded = 'YWJj';
    expect(encodeBase64(testString)).toBe(encoded);
    expect(decodeBase64(encodeBase64(testString))).toBe(testString);

});
