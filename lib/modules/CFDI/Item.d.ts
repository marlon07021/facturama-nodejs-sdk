import Tax from './Tax';
export default interface Item {
    ProductCode: string;
    IdentificationNumber: string;
    Description: string;
    Unit: string;
    UnitCode: string;
    UnitPrice: number;
    Quantity: number;
    Subtotal: number;
    TaxObject: string;
    Taxes: Tax[];
    Total: number;
}
