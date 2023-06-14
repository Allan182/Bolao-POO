export abstract class Pessoa {

    
    private _nome: string;
    private _cpf: string;

    constructor(nome: string, cpf: string) {
        this._nome = nome;
        this._cpf = cpf;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(nome: string) {
        this._nome = nome;
    }

    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public toString(): string {
        return ` Nome: ${this.nome}  \n CPF: ${this.cpf}`
    }
}