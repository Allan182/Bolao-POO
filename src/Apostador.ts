import { Aposta } from "./Aposta";
import { Bolao } from "./Bolao";
import { Equipe } from "./Equipe";
import { Partida } from "./Partida";
import { Pessoa } from "./Pessoa";


export class Apostador extends Pessoa {

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
    }
    
    public apostar(bolao: Bolao, partida: Partida, equipe: Equipe, valor: number) {
        const aposta = new Aposta(this, valor, partida, equipe)
        bolao.vetApostas.push(aposta);
    }
}