"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receptor = void 0;
const Nacional_1 = require("./Nacional");
const Extranjero_1 = require("./Extranjero");
class Receptor {
    Nacional;
    Nacionalidad;
    Extranjero;
    constructor(receptor) {
        this.Nacionalidad = receptor.Nacionalidad;
        this.Nacional = new Nacional_1.Nacional(receptor.Nacional);
        this.Extranjero = new Extranjero_1.Extranjero(receptor.Extranjero);
    }
    json() {
        return {
            Nacionalidad: this.Nacionalidad,
            Nacional: this.Nacional.json(),
            Extranjero: this.Extranjero.json(),
        };
    }
}
exports.Receptor = Receptor;
