"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const facturama_1 = __importDefault(require("../facturama"));
const cfdi = {
    "Serie": "B",
    "Currency": "MXN",
    "ExpeditionPlace": "78140",
    "PaymentConditions": "CREDITO A SIETE DIAS",
    "Folio": "100",
    "CfdiType": "I",
    "PaymentForm": "03",
    "PaymentMethod": "PUE",
    "Issuer": {
        "Rfc": "URE180429TM6",
        "Name": "UNIVERSIDAD ROBOTICA ESPAÑOLA",
        "FiscalRegime": "601"
    },
    "Receiver": {
        "Rfc": "EKU9003173C9",
        "Name": "ESCUELA KEMPER URGATE",
        "CfdiUse": "P01",
        "FiscalRegime": "603",
        "TaxZipCode": "26015" // Nuevos elementos para CFDi 4.0
    },
    "Items": [
        {
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
            "TaxObject": "02",
            "Taxes": [{
                    "Total": 240.0,
                    "Name": "IVA",
                    "Base": 1500.0,
                    "Rate": 0.16,
                    "IsRetention": false
                }],
            "Total": 1740.0
        }
    ]
};
(async () => {
    const sdk = new facturama_1.default(false);
    sdk.login('pruebas', 'pruebas2011');
    const cdfis = await sdk.CDFI.List();
    console.log(cdfis);
})();
