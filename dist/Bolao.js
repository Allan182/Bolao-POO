"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bolao = void 0;
class Bolao {
    constructor(dataInicio, vetApostas) {
        this._dataInicio = dataInicio;
        this._vetApostas = vetApostas;
    }
    get dataInicio() {
        return this._dataInicio;
    }
    set dataInicio(dataInicio) {
        this._dataInicio = dataInicio;
    }
    get vetApostas() {
        return this._vetApostas;
    }
    set vetApostas(vetApostas) {
        this._vetApostas = vetApostas;
    }
    conferirResultado(partida, golEquipeUm, golEquipeDois) {
        if (this.vetApostas.find(e => {
            if (e.partida === partida) {
                return true;
            }
        })) {
            let acumuladoraDeValor = 0;
            let ganhadoresDoBolao = [];
            if (golEquipeUm > golEquipeDois) {
                this.vetApostas.filter(e => {
                    if (e.equipe === partida.equipeUm && (e.partida === partida)) {
                        ganhadoresDoBolao.push(e);
                    }
                });
            }
            else if (golEquipeUm < golEquipeDois) {
                this.vetApostas.filter(e => {
                    if (e.equipe === partida.equipeDois && (e.partida === partida)) {
                        ganhadoresDoBolao.push(e);
                    }
                });
            }
            this.vetApostas.forEach(e => acumuladoraDeValor += e.valor);
            const mediaValorPorGanhador = (acumuladoraDeValor / (ganhadoresDoBolao.length));
            if (ganhadoresDoBolao.length > 0) {
                console.log(ganhadoresDoBolao.map(e => ` Nome : ${e.apostador.nome} Valor Ganho : ${mediaValorPorGanhador}`));
            }
            else {
                console.log("Não Houve Ganhadores Nesta Partida");
            }
        }
        else {
            console.log("Não houve apostas nesta Partida!!!");
        }
    }
    toString() {
        return ` Data Inicial: ${this.dataInicio} \n Apostas: ${this.vetApostas}`;
    }
}
exports.Bolao = Bolao;
//# sourceMappingURL=Bolao.js.map