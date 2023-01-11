"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complemento = void 0;
const Intereses_1 = require("./Intereses");
const ServiciosPlataformasTecnologicas_1 = require("./ServiciosPlataformasTecnologicas");
const TimbreFiscalDigital_1 = require("./TimbreFiscalDigital");
class Complemento {
    Intereses;
    ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital;
    constructor(complemento) {
        this.Intereses = new Intereses_1.Intereses(complemento.Intereses);
        this.ServiciosPlataformasTecnologicas = new ServiciosPlataformasTecnologicas_1.ServiciosPlataformasTecnologicas(complemento.ServiciosPlataformasTecnologicas);
        this.TimbreFiscalDigital = new TimbreFiscalDigital_1.TimbreFiscalDigital(complemento.TimbreFiscalDigital);
    }
    json() {
        return {
            Intereses: this.Intereses.json(),
            ServiciosPlataformasTecnologicas: this.ServiciosPlataformasTecnologicas.json(),
            TimbreFiscalDigital: this.TimbreFiscalDigital.json(),
        };
    }
}
exports.Complemento = Complemento;
