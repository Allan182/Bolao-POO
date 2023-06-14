"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipe = void 0;
class Equipe {
    constructor(nome, local, vetJogadores) {
        this._nome = nome;
        this._local = local;
        this._vetJogadores = vetJogadores;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get local() {
        return this._local;
    }
    set local(local) {
        this._local = local;
    }
    get vetJogadores() {
        return this._vetJogadores;
    }
    set vetJogadores(vetJogadores) {
        this._vetJogadores = vetJogadores;
    }
    toString() {
        return ` Nome: ${this.nome} \n Local: ${this.local} \n Jogadores: ${this.vetJogadores}`;
    }
}
exports.Equipe = Equipe;
//# sourceMappingURL=Equipe.js.map