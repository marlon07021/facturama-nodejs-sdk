"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Complemento_1 = require("./Complemento");
const Emisor_1 = __importDefault(require("./Emisor"));
const Periodo_1 = __importDefault(require("./Periodo"));
const Receptor_1 = require("./Receptor");
const Totales_1 = require("./Totales");
class Retencion {
    CadenaOriginal;
    Complemento;
    CveRetenc;
    DescRetenc;
    Emisor;
    FechaExp;
    FolioInt;
    Id;
    IsCanceled;
    Periodo;
    Receptor;
    Sello;
    Totales;
    constructor(retencion) {
        this.CadenaOriginal = retencion.CadenaOriginal;
        this.Complemento = new Complemento_1.Complemento(retencion.Complemento);
        this.CveRetenc = retencion.CveRetenc;
        this.DescRetenc = retencion.DescRetenc;
        this.Emisor = new Emisor_1.default(retencion.Emisor);
        this.FechaExp = retencion.FechaExp;
        this.FolioInt = retencion.FolioInt;
        this.Id = retencion.Id;
        this.IsCanceled = retencion.IsCanceled;
        this.Periodo = new Periodo_1.default(retencion.Periodo);
        this.Receptor = new Receptor_1.Receptor(retencion.Receptor);
        this.Sello = retencion.Sello;
        this.Totales = new Totales_1.Totales(retencion.Totales);
    }
    json() {
        return {
            CadenaOriginal: this.CadenaOriginal,
            Complemento: this.Complemento.json(),
            CveRetenc: this.CveRetenc,
            DescRetenc: this.DescRetenc,
            Emisor: this.Emisor.json(),
            FechaExp: this.FechaExp,
            FolioInt: this.FolioInt,
            Id: this.Id,
            IsCanceled: this.IsCanceled,
            Periodo: this.Periodo.json(),
            Receptor: this.Receptor.json(),
            Sello: this.Sello,
            Totales: this.Totales.json(),
        };
    }
}
exports.default = Retencion;
