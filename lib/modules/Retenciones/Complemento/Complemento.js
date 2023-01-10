"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complemento = void 0;
const _1 = require("./");
class Complemento {
    Intereses;
    ServiciosPlataformasTecnologicas;
    TimbreFiscalDigital;
    constructor(complemento) {
        this.Intereses = new _1.Intereses(complemento.Intereses);
        this.ServiciosPlataformasTecnologicas = new _1.ServiciosPlataformasTecnologicas(complemento.ServiciosPlataformasTecnologicas);
        this.TimbreFiscalDigital = new _1.TimbreFiscalDigital(complemento.TimbreFiscalDigital);
    }
    json() {
        return {
            Intereses: this.Intereses.json(),
            ServiciosPlataformasTecnologicas: this.ServiciosPlataformasTecnologicas.json(),
            TimbreFiscalDigital: this.TimbreFiscalDigital.json()
        };
    }
}
exports.Complemento = Complemento;
