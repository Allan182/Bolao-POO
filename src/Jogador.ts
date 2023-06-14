import { Pessoa } from "./Pessoa";

export class Jogador extends Pessoa {

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
    }

    public treinar() {
        console.log(`${super.nome} Está Treinando!`);
    }

    public jogar() {
        console.log(`${super.nome} Está Jogando!`);
    }

    


}