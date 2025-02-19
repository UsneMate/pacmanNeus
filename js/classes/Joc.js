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
    this.puntuacio = 0;
    this.meuComecocos = new Comecocos(30, 300, 30, "Yellow");
    this.meuTauler = new Tauler();
    this.foodItems = [];
    this.cireres = [];
    this.imgPared = null;
    this.imgMenjar = null;
    this.imgCirera = null;
  }

  repartirMenjar(){
    for (let i = 0; i < this.meuTauler.mapa.length; i++) {
      for (let j = 0; j < this.meuTauler.mapa[i].length; j++) {
        if (this.meuTauler.mapa[i][j] === 2) {
          this.foodItems.push(new Food(j * 30, i * 30, 10)); // 10 punts per cada menjar
        }

        if (this.meuTauler.mapa[i][j] === 3) {
          this.cireres.push(new Cirera(j * 30, i * 30, 50));
        }
      }
    }
  }

  preload(){
    this.imgPared = loadImage("../img/roca.png");
    this.imgMenjar = loadImage("../img/food.png");
    this.imgCirera = loadImage("../img/cerezas.png");
  }

  dibuixarTauler() {
    // Dibuixa el tauler
    for (let i = 0; i < this.meuTauler.mapa.length; i++) {
      for (let j = 0; j < this.meuTauler.mapa[i].length; j++) {
        if (this.meuTauler.mapa[i][j] === 1) {
          image(this.imgPared, j * 30, i * 30, 30, 30); // Dibuixa la imatge de la paret
        }
      }
    }
  }

  dibuixarComecocos(){
    this.meuComecocos.drawComecocos();
  }

  dibuixarMenjar(){
    this.foodItems.forEach((food) => {
      food.drawFood(this.imgMenjar);
      this.puntuacio += food.checkCollisionFood(this.meuComecocos.x, this.meuComecocos.y, this.meuComecocos.radi);
    });

    this.cireres.forEach((cirera) => {
      cirera.drawFoodCirera(this.imgCirera);
      this.puntuacio += cirera.checkCollisionCirera(this.meuComecocos.x, this.meuComecocos.y, this.meuComecocos.radi);
    });
  }
}
