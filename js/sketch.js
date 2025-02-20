//import Comecocos from "./classes/Comecocos.js";
//import Tauler from "./classes/Tauler.js";
//import Food from "./classes/Food.js";
//import Cirera from "./classes/Cirera.js";
import Joc from "./classes/Joc.js";

// Variables globals
//let meuComecocos;
//let meuTauler;
let joc;
//let imgPared;

//let imgMenjar;
//let foodItems = [];
//let puntuacio = 0;

//let imgCirera;
//let cireres = [];
//com faig un bucle



// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 700;

// Variable amb la velocitat de moviment
let velocitat = 15;

function preload() {
  /*imgPared = loadImage("../img/roca.png");
  imgMenjar = loadImage("../img/food.png");
  imgCirera = loadImage("../img/cerezas.png");*/
  joc = new Joc();
  joc.preload();
}

function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  // Crear instàncies de Comecocos i Tauler
  //meuComecocos = new Comecocos(30, 300, 30, "Yellow");
  //meuTauler = new Tauler();

  //joc = new Joc();
  joc.repartirMenjar();

  // Repartir el menjar al tauler
  /*for (let i = 0; i < joc.meuTauler.mapa.length; i++) {
    for (let j = 0; j < joc.meuTauler.mapa[i].length; j++) {
      if (joc.meuTauler.mapa[i][j] === 2) {
        joc.foodItems.push(new Food(j * 30, i * 30, 10)); // 10 punts per cada menjar
      }

      if (joc.meuTauler.mapa[i][j] === 3) {
        joc.cireres.push(new Cirera(j * 30, i * 30, 50));
      }
    }
  }*/
}

function draw() {
  background(190);
  joc.dibuixarTauler();

  // Dibuixa el tauler
  /*for (let i = 0; i < joc.meuTauler.mapa.length; i++) {
    for (let j = 0; j < joc.meuTauler.mapa[i].length; j++) {
      if (joc.meuTauler.mapa[i][j] === 1) {
        image(imgPared, j * 30, i * 30, 30, 30); // Dibuixa la imatge de la paret
      }
    }
  }*/

  // Dibuixa el Comecocos
  //joc.meuComecocos.drawComecocos();
  joc.dibuixarComecocos();

  // Dibuixa el menjar i comprova si el Comecocos el menja
  joc.dibuixarMenjar();
  // joc.foodItems.forEach((food) => {
  //   food.drawFood(joc.imgMenjar);
  //   puntuacio += food.checkCollisionFood(joc.meuComecocos.x, joc.meuComecocos.y, joc.meuComecocos.radi);
  // });
  //
  // joc.cireres.forEach((cirera) => {
  //   cirera.drawFoodCirera(joc.imgCirera);
  //   puntuacio += cirera.checkCollisionCirera(joc.meuComecocos.x, joc.meuComecocos.y, joc.meuComecocos.radi);
  // });

  // Mostrar puntuació
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Puntuació: " + joc.puntuacio, xCanvas / 2 -(30), yCanvas -50);
}

// Funció per detectar tecles i moure el Comecocos
function keyPressed() {
  // Definir les noves coordenades de destí
  let novaX = joc.meuComecocos.x;
  let novaY = joc.meuComecocos.y;

  // Moviments i angles segons la direcció
  if (keyCode === UP_ARROW) {
    novaY -= velocitat;
    joc.meuComecocos.updateAngle('UP');
  } else if (keyCode === DOWN_ARROW) {
    novaY += velocitat;
    joc.meuComecocos.updateAngle('DOWN');
  } else if (keyCode === LEFT_ARROW) {
    novaX -= velocitat;
    joc.meuComecocos.updateAngle('LEFT');
  } else if (keyCode === RIGHT_ARROW) {
    novaX += velocitat;
    joc.meuComecocos.updateAngle('RIGHT');
  }

  // Comprovar si la nova posició és una roca
  let fila = Math.floor(novaY / 30); // Convertir la posició Y a coordenades de matriu
  let columna = Math.floor(novaX / 30); // Convertir la posició X a coordenades de matriu

  if (!joc.esRoca(fila, columna)) {
    //si no és una roca, el comecocos es pot moure
    joc.meuComecocos.updatePosition(novaX, novaY);
  }
  // if (joc.meuTauler.mapa[fila] && joc.meuTauler.mapa[fila][columna] !== 1) {
  //   // Si no és una roca, mou el Comecocos
  //   joc.meuComecocos.updatePosition(novaX, novaY);
  // }

  // Assegurar que el Comecocos no surti del canvas.
  joc.comprovarLimits(xCanvas, yCanvas);
  // if (joc.meuComecocos.y < 30 + joc.meuComecocos.radi / 2) {
  //   joc.meuComecocos.updatePosition(joc.meuComecocos.x, 30 + joc.meuComecocos.radi / 2);
  // }
  // if (joc.meuComecocos.y > yCanvas - 30 - joc.meuComecocos.radi / 2) {
  //   joc.meuComecocos.updatePosition(joc.meuComecocos.x, yCanvas - 30 - joc.meuComecocos.radi / 2);
  // }
  //
  // if (joc.meuComecocos.x < 30 + joc.meuComecocos.radi / 2 && (joc.meuComecocos.y <= 270 || joc.meuComecocos.y >= 330)) {
  //   joc.meuComecocos.updatePosition(30 + this.meuComecocos.radi / 2, this.meuComecocos.y);
  // }
  // if (joc.meuComecocos.x > xCanvas - 30 - joc.meuComecocos.radi / 2 && (joc.meuComecocos.y <= 270 || joc.meuComecocos.y >= 330)) {
  //   joc.meuComecocos.updatePosition(xCanvas - 30 - joc.meuComecocos.radi / 2, joc.meuComecocos.y);
  // }
  //
  // // Permetre el pas pel túnel lateral
  // if (joc.meuComecocos.x > xCanvas) {
  //   joc.meuComecocos.updatePosition(0, joc.meuComecocos.y);
  // }
  // if (joc.meuComecocos.x < 0) {
  //   joc.meuComecocos.updatePosition(xCanvas, joc.meuComecocos.y);
  // }
}


// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;
