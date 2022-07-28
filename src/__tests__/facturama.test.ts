import {FacturamaSDK} from "../index";
import {NotInitializedError} from "../util/NotInitializedError";

describe('facturama sdk test', () => {
    test('throw error if not login for CDFI', () => {
        const sdk = new FacturamaSDK(false);
        try {
            sdk.CDFI;
            throw new Error('did not fail');
        } catch (e) {
            expect(e).toBeInstanceOf(NotInitializedError);
        }

    });
    test('throw error if not login for CSD', () => {
        const sdk = new FacturamaSDK(false);
        try {
            sdk.CSD;
            throw new Error('did not fail');
        } catch (e) {
            expect(e).toBeInstanceOf(NotInitializedError);
        }

    });
    test('throw error if not login for Catalogs', () => {
        const sdk = new FacturamaSDK(false);
        try {
            sdk.Catalogs;
            throw new Error('did not fail');
        } catch (e) {
            expect(e).toBeInstanceOf(NotInitializedError);
        }

    });
});
