"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        this._cpf = cpf;
    }
    toString() {
        return ` Nome: ${this.nome}  \n CPF: ${this.cpf}`;
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map