//importem totes les classe que necessito per
//poder fer funcionar el joc


import Tauler from './Tauler.js';
import Comecocos from './Comecocos.js';
import Food from './Food.js';
import Cirera from './Cirera.js';



// Fem el constructor de la classe Joc
// i li passem les variables que necessita
// i creeem les instancies de les classes

export default class Joc {
  //ara ens interessa també afegir vides
  constructor() {
    this.vides = 3;

    this.meuComecocos = new Comecocos(30, 300, 30, "Yellow");
    this.meuTauler = new Tauler();
    this.foodItems = [];
    this.cireres = [];
  }


}
