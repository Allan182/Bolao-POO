"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
const Pessoa_1 = require("./Pessoa");
class Jogador extends Pessoa_1.Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
    treinar() {
        console.log(`${super.nome} Está Treinando!`);
    }
    jogar() {
        console.log(`${super.nome} Está Jogando!`);
    }
}
exports.Jogador = Jogador;
//# sourceMappingURL=Jogador.js.map