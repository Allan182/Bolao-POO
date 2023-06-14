
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aposta = void 0;
class Aposta {
    constructor(apostador, valor, partida, equipe) {
        this._apostador = apostador;
        this._valor = valor;
        this._partida = partida;
        this._equipe = equipe;
    }
    get apostador() {
        return this._apostador;
    }
    set apostador(apostador) {
        this._apostador = apostador;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get partida() {
        return this._partida;
    }
    set partida(partida) {
        this._partida = partida;
    }
    get equipe() {
        return this._equipe;
    }
    set equipe(equipe) {
        this._equipe = equipe;
    }
    toString() {
        return ` Apostador: ${this.apostador} \n Valor: ${this.valor} \n Partida: ${this.partida} Equipe: ${this.equipe}`;
    }
}
exports.Aposta = Aposta;
//# sourceMappingURL=Aposta.js.map