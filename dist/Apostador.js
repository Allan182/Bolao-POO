"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apostador = void 0;
const Aposta_1 = require("./Aposta");
const Pessoa_1 = require("./Pessoa");
class Apostador extends Pessoa_1.Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
    apostar(bolao, partida, equipe, valor) {
        const aposta = new Aposta_1.Aposta(this, valor, partida, equipe);
        bolao.vetApostas.push(aposta);
    }
}
exports.Apostador = Apostador;
//# sourceMappingURL=Apostador.js.map