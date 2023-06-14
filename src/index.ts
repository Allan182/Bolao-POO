/*  Autores : Allan Furlani
    Versão: 1.2
    Descrição: Trabalhar com Classes, 
    Polimorfismo e Herança. Conceitos de Programação Orientada a 
    Objetos utilizando TypeScript.
*/



import { Apostador } from './Apostador';
import { Equipe } from './Equipe';
import { Bolao } from "./Bolao";
import { Partida } from "./Partida";
import { Jogador } from './Jogador';


const jogadorUm = new Jogador("Allan Furlani", "132.681.077-45");
const jogadorDois = new Jogador("Arnaldo Sakomani", "122.221.327-32");
const jogadorTres = new Jogador("Rennan Merlo", "245.412.032-25");
const jogadorQuatro = new Jogador("Merlin", "113.321.987-12");

const equipeUm = new Equipe("Equipe Tenis de Mesa", "Santa Teresa", [jogadorUm, jogadorDois]);
const equipeDois = new Equipe("Equipe Boliche", "Santa Maria", [jogadorTres, jogadorQuatro]);

const apostadorUm = new Apostador("Apostador Brick", "111.222.333-45");
const apostadorDois = new Apostador("Apostador Another", "321.123.323-95");

const bolao = new Bolao("20/05/2002", []);

const partidaUm = new Partida("10/05/2004", equipeUm, equipeDois);
const partidaDois = new Partida("20/07/2010", equipeUm, equipeDois);

(apostadorUm.apostar(bolao, partidaUm, equipeUm, 250));
(apostadorDois.apostar(bolao, partidaDois, equipeUm, 500));


bolao.conferirResultado(partidaUm, 3, 2);


//console.log(equipeUm);

