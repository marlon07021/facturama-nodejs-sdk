import {encodeParams} from "../../util/qs";

test('qs', () => {
   const queryObject = {
       query: 'example'
   };
   const queryString = "query=example";
   expect(encodeParams(queryObject)).toBe(queryString);

    const multiQueryObject = {
        query: 'example',
        query2: 'example2'
    };
    const multiQueryString = "query=example&query2=example2";

    expect(encodeParams(multiQueryObject)).toBe(multiQueryString);
});
