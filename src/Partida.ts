import { Equipe } from "./Equipe";

export class Partida {

    
    private _dataPartida: string;
    private _equipeUm: Equipe;
    private _equipeDois: Equipe;

    constructor(dataPartida: string, equipeUm: Equipe, equipeDois: Equipe) {
        this._dataPartida = dataPartida;
        this._equipeUm = equipeUm;
        this._equipeDois = equipeDois;
    }

    public get dataPartida(): string {
        return this._dataPartida;
    }
    public set dataPartida(dataPartida: string) {
        this._dataPartida = dataPartida;
    }

    public get equipeUm(): Equipe {
        return this._equipeUm;
    }
    public set equipeUm(equipeUm: Equipe) {
        this._equipeUm = equipeUm;
    }

    public get equipeDois(): Equipe {
        return this._equipeDois;
    }
    public set equipeDois(equipeDois: Equipe) {
        this._equipeDois = equipeDois;
    }
    
    public toString(): string {
        return ` Data Partida: ${this.dataPartida} \n Equipe Um: ${this.equipeUm} \n Equipe Dois: ${this.equipeDois}`;
    }
}