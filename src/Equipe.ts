import { Jogador } from './Jogador';

export class Equipe {

    private _nome: string;
    private _local: string;
    private _vetJogadores: Jogador[];

    constructor(nome: string, local: string, vetJogadores: Jogador[]) {
        this._nome = nome;
        this._local = local;
        this._vetJogadores = vetJogadores;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get local(): string {
        return this._local;
    }

    public set local(local: string) {
        this._local = local;
    }

    public get vetJogadores(): Jogador[] {
        return this._vetJogadores;
    }

    public set vetJogadores(vetJogadores: Jogador[]) {
        this._vetJogadores = vetJogadores;
    }

    public toString(): string {
        return ` Nome: ${this.nome} \n Local: ${this.local} \n Jogadores: ${this.vetJogadores}`
    }
}