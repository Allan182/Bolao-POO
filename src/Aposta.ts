import { Apostador } from './Apostador';
import { Equipe } from './Equipe';
import { Partida } from './Partida';

export class Aposta {

    private _apostador: Apostador;
    private _valor: number;
    private _partida: Partida;
    private _equipe: Equipe;

    constructor(apostador: Apostador, valor: number, partida: Partida, equipe: Equipe) {
        this._apostador = apostador;
        this._valor = valor;
        this._partida = partida;
        this._equipe = equipe;
    }


    public get apostador(): Apostador {
        return this._apostador;
    }
    public set apostador(apostador: Apostador) {
        this._apostador = apostador;
    }


    public get valor(): number {
        return this._valor;
    }
    public set valor(valor: number) {
        this._valor = valor;
    }

    public get partida(): Partida {
        return this._partida;
    }
    public set partida(partida: Partida) {
        this._partida = partida;
    }


    public get equipe(): Equipe {
        return this._equipe;
    }
    public set equipe(equipe: Equipe) {
        this._equipe = equipe;
    }


    public toString(): string {
        return ` Apostador: ${this.apostador} \n Valor: ${this.valor} \n Partida: ${this.partida} Equipe: ${this.equipe}`;
    }
}