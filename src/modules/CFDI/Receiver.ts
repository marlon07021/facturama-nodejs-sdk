export default interface Receiver {
    Rfc: string;
    Name: string;
    CfdiUse: string;
    FiscalRegime?: string; 	// Nuevos elementos para CFDi 4.0
    TaxZipCode?: string;	// Nuevos elementos para CFDi 4.0
}
