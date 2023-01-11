"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContribucionGubernamental = void 0;
class ContribucionGubernamental {
    EntidadDondePagaLaContribucion;
    ImpContrib;
    constructor(contribucion) {
        this.EntidadDondePagaLaContribucion = contribucion.EntidadDondePagaLaContribucion;
        this.ImpContrib = contribucion.ImpContrib;
    }
    json() {
        return {
            EntidadDondePagaLaContribucion: this.EntidadDondePagaLaContribucion,
            ImpContrib: this.ImpContrib,
        };
    }
}
exports.ContribucionGubernamental = ContribucionGubernamental;
