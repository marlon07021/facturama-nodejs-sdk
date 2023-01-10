"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receptor = void 0;
const _1 = require("./");
class Receptor {
    Nacional;
    Nacionalidad;
    Extranjero;
    constructor(receptor) {
        this.Nacionalidad = receptor.Nacionalidad;
        this.Nacional = new _1.Nacional(receptor.Nacional);
        this.Extranjero = new _1.Extranjero(receptor.Extranjero);
    }
    json() {
        return {
            Nacionalidad: this.Nacionalidad,
            Nacional: this.Nacional.json(),
            Extranjero: this.Extranjero.json()
        };
    }
}
exports.Receptor = Receptor;
