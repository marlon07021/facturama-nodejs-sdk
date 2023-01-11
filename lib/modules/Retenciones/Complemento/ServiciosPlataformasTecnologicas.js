"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiciosPlataformasTecnologicas = void 0;
const Servicio_1 = require("./Servicio");
class ServiciosPlataformasTecnologicas {
    DifIvaEntregadoPrestServ;
    MonTotalContribucionGubernamental;
    MonTotalporUsoPlataforma;
    MontToServSIva;
    NumServ;
    Periodicidad;
    Servicios;
    TotalIsrRetenido;
    TotalIvaRetenido;
    TotalIvaTrasladado;
    constructor(servicios) {
        this.DifIvaEntregadoPrestServ = servicios.DifIvaEntregadoPrestServ;
        this.MonTotalContribucionGubernamental = servicios.MonTotalContribucionGubernamental;
        this.MonTotalporUsoPlataforma = servicios.MonTotalporUsoPlataforma;
        this.MontToServSIva = servicios.MontToServSIva;
        this.NumServ = servicios.NumServ;
        this.Periodicidad = servicios.Periodicidad;
        this.Servicios = servicios.Servicios.map((servicio) => new Servicio_1.Servicio(servicio));
        this.TotalIsrRetenido = servicios.TotalIsrRetenido;
        this.TotalIvaRetenido = servicios.TotalIvaRetenido;
        this.TotalIvaTrasladado = servicios.TotalIvaTrasladado;
    }
    json() {
        return {
            DifIvaEntregadoPrestServ: this.DifIvaEntregadoPrestServ,
            MonTotalContribucionGubernamental: this.MonTotalContribucionGubernamental,
            MonTotalporUsoPlataforma: this.MonTotalporUsoPlataforma,
            MontToServSIva: this.MontToServSIva,
            NumServ: this.NumServ,
            Periodicidad: this.Periodicidad,
            Servicios: this.Servicios.map((servicio) => servicio.json()),
            TotalIsrRetenido: this.TotalIsrRetenido,
            TotalIvaRetenido: this.TotalIvaRetenido,
            TotalIvaTrasladado: this.TotalIvaTrasladado,
        };
    }
}
exports.ServiciosPlataformasTecnologicas = ServiciosPlataformasTecnologicas;
