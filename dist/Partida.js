"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partida = void 0;
class Partida {
    constructor(dataPartida, equipeUm, equipeDois) {
        this._dataPartida = dataPartida;
        this._equipeUm = equipeUm;
        this._equipeDois = equipeDois;
    }
    get dataPartida() {
        return this._dataPartida;
    }
    set dataPartida(dataPartida) {
        this._dataPartida = dataPartida;
    }
    get equipeUm() {
        return this._equipeUm;
    }
    set equipeUm(equipeUm) {
        this._equipeUm = equipeUm;
    }
    get equipeDois() {
        return this._equipeDois;
    }
    set equipeDois(equipeDois) {
        this._equipeDois = equipeDois;
    }
    toString() {
        return ` Data Partida: ${this.dataPartida} \n Equipe Um: ${this.equipeUm} \n Equipe Dois: ${this.equipeDois}`;
    }
}
exports.Partida = Partida;
//# sourceMappingURL=Partida.js.map