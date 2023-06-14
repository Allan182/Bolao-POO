import { Aposta } from './Aposta';
import { Apostador } from './Apostador';
import { Equipe } from './Equipe';
import { Partida } from './Partida';


export class Bolao {

    private _dataInicio: string;
    private _vetApostas: Aposta[];


    constructor(dataInicio: string, vetApostas: Aposta[]) {
        this._dataInicio = dataInicio;
        this._vetApostas = vetApostas;
    }

    public get dataInicio(): string {
        return this._dataInicio;
    }
    public set dataInicio(dataInicio: string) {
        this._dataInicio = dataInicio;
    }

    public get vetApostas(): Aposta[] {
        return this._vetApostas;
    }
    public set vetApostas(vetApostas: Aposta[]) {
        this._vetApostas = vetApostas;
    }

    public conferirResultado(partida: Partida, golEquipeUm: number, golEquipeDois: number) {

        if (this.vetApostas.find(e => {
            if (e.partida === partida) {
                return true;
            }
        })) {


            let acumuladoraDeValor: number = 0;
            let ganhadoresDoBolao: Aposta[] = [];

            if (golEquipeUm > golEquipeDois) {
                this.vetApostas.filter(e => {
                    if (e.equipe === partida.equipeUm && (e.partida === partida)) {
                        ganhadoresDoBolao.push(e);
                    }
                });
            } else if (golEquipeUm < golEquipeDois) {
                this.vetApostas.filter(e => {
                    if (e.equipe === partida.equipeDois && (e.partida === partida)) {
                        ganhadoresDoBolao.push(e);
                    }
                });
            }

            this.vetApostas.forEach(e => acumuladoraDeValor += e.valor);

            const mediaValorPorGanhador = (acumuladoraDeValor / (ganhadoresDoBolao.length));

            if (ganhadoresDoBolao.length > 0) {
                console.log(ganhadoresDoBolao.map(e => ` Nome : ${e.apostador.nome} Valor Ganho : ${mediaValorPorGanhador}`))
            } else {
                console.log("Não Houve Ganhadores Nesta Partida");
            }

        } else {
            console.log("Não houve apostas nesta Partida!!!");
        }
    }


    public toString(): string {
        return ` Data Inicial: ${this.dataInicio} \n Apostas: ${this.vetApostas}`;
    }
}