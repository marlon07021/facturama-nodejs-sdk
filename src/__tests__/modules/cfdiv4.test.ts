import {CFDIv4} from "../../modules/CFDI";

const sampleCFDIv4 = {
    "Serie": "B",
    "Currency": "MXN",
    "ExpeditionPlace": "78140",
    "PaymentConditions": "CREDITO A SIETE DIAS",
    "CfdiType": "I",
    "PaymentForm": "03",
    "PaymentMethod": "PUE",
    "Receiver":
        {
            "Rfc": "ZUÑ920208KL4",
            "Name": "ZAPATERIA URTADO ÑERI",
            "CfdiUse": "G03",
            "FiscalRegime": "601",
            "TaxZipCode": "77060"
        },
    "Items":
        [{
            "ProductCode": "10101504",
            "IdentificationNumber": "EDL",
            "Description": "Estudios de viabilidad",
            "Unit": "NO APLICA",
            "UnitCode": "MTS",
            "UnitPrice": 50.0,
            "Quantity": 2.0,
            "Subtotal": 100.0,
            "TaxObject": "02",
            "Taxes": [{
                "Total": 16.0,
                "Name": "IVA",
                "Base": 100.0,
                "Rate": 0.16,
                "IsRetention": false
            }],
            "Total": 116.0
        },
            {
                "ProductCode": "10101504",
                "IdentificationNumber": "001",
                "Description": "SERVICIO DE COLOCACION",
                "Unit": "NO APLICA",
                "UnitCode": "E49",
                "UnitPrice": 100.0,
                "Quantity": 15.0,
                "Subtotal": 1500.0,
                "Discount": 0.0,
                "TaxObject":"01",
                "Total": 1500.0
            }

        ]
}

import FacturamaSDK from "../../facturama";
import axios from "axios";

jest.mock('axios');

describe('CFDIv4 module API', () => {
    const sdk = new FacturamaSDK(false);
    sdk.login('pruebas', 'pruebas2011');

    test('get CFDI by id', async () => {
        let id = 'Dlb9uyxY2ueQkeJl0TMofQ2';

        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                id
            }
        })

        const {data} = await sdk.CDFI.Get('Dlb9uyxY2ueQkeJl0TMofQ2');
        expect(data.id).toBe(id);
        expect(axios.get).toHaveBeenCalledWith(`${sdk.ApiUrl}api-lite/cfdis/${id}`, {"headers": {"Authorization": "Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==", "Content-Type": "application/json"}, "signal": undefined});

    });

    test('list CFDIs', async () => {

        (axios.get as jest.Mock).mockResolvedValue({
            data: [{Serie: sampleCFDIv4.Serie}]
        })

        const {data} = await sdk.CDFI.List();
        expect(data).toHaveLength(1);
        expect(axios.get).toHaveBeenCalledWith(`${sdk.ApiUrl}api-lite/cfdis`, {"headers": {"Authorization": "Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==", "Content-Type": "application/json"}, "signal": undefined});

    });

    test('create CFDI', async () => {
        const cfdi = new CFDIv4(sampleCFDIv4);
        await sdk.CDFI.Create(cfdi);
        expect(axios.post).toHaveBeenCalledWith(`${sdk.ApiUrl}api-lite/2/cfdis`,{...cfdi.json()}, {"headers": {"Authorization": "Basic cHJ1ZWJhczpwcnVlYmFzMjAxMQ==", "Content-Type": "application/json"}, "signal": undefined});

    });
});
