import Comecocos from "./classes/Comecocos.js";
import Tauler from "./classes/Tauler.js";
import Food from "./classes/Food.js";
import Cirera from "./classes/Cirera.js";

// Variables globals
let meuComecocos;
let meuTauler;
let imgPared;

let imgMenjar;
let foodItems = [];
let puntuacio = 0;

let imgCirera;
let cireres = [];


// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 700;

// Variable amb la velocitat de moviment
let velocitat = 15;

function preload() {
  imgPared = loadImage("../img/roca.png");
  imgMenjar = loadImage("../img/food.png");
  imgCirera = loadImage("../img/cerezas.png");
}

function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  // Crear instàncies de Comecocos i Tauler
  meuComecocos = new Comecocos(30, 300, 30, "Yellow");
  meuTauler = new Tauler();

  // Repartir el menjar al tauler
  for (let i = 0; i < meuTauler.mapa.length; i++) {
    for (let j = 0; j < meuTauler.mapa[i].length; j++) {
      if (meuTauler.mapa[i][j] === 2) {
        foodItems.push(new Food(j * 30, i * 30, 10)); // 10 punts per cada menjar
      }
      if (meuTauler.mapa[i][j] === 3) { // 3 per les cireres al tauler
        let x = j * 30; // Posició X ajustada al centre de la cel·la
        let y = i * 30; // Posició Y ajustada al centre de la cel·la
        cireres.push(new Cirera(x, y, imgCirera)); // Crear nova instància de Cirera
      }
    }
  }
}

function draw() {
  background(190);

  // Dibuixa el tauler
  for (let i = 0; i < meuTauler.mapa.length; i++) {
    for (let j = 0; j < meuTauler.mapa[i].length; j++) {
      if (meuTauler.mapa[i][j] === 1) {
        image(imgPared, j * 30, i * 30, 30, 30); // Dibuixa la imatge de la paret
      }
    }
  }



  // Dibuixa el Comecocos
  meuComecocos.drawComecocos();

  // Dibuixa el menjar i comprova si el Comecocos el menja
  foodItems.forEach((food) => {
    food.drawFood(imgMenjar);
    puntuacio += food.checkCollision(meuComecocos.x, meuComecocos.y, meuComecocos.radi);
  });

  // Dibuixa les cireres
  for (let i = cireres.length - 1; i >= 0; i--) {
    cireres[i].drawCirera(); // cridem el mètode de Cirera

    // Comprova si Comecocos menja una cirera
    if (dist(meuComecocos.x, meuComecocos.y, cireres[i].x, cireres[i].y) < meuComecocos.radi / 2) {
      puntuacio += cireres[i].getPunts(); // Suma 50 punts
      cireres.splice(i, 1); // Elimina la cirera menjada
    }
  }


  // Mostrar puntuació
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Puntuació: " + puntuacio, xCanvas / 2 -(30), yCanvas -50);
}

// Funció per detectar tecles i moure el Comecocos
function keyPressed() {
  // Definir les noves coordenades de destí
  let novaX = meuComecocos.x;
  let novaY = meuComecocos.y;

  // Moviments i angles segons la direcció
  if (keyCode === UP_ARROW) {
    novaY -= velocitat;
    meuComecocos.updateAngle('UP');
  } else if (keyCode === DOWN_ARROW) {
    novaY += velocitat;
    meuComecocos.updateAngle('DOWN');
  } else if (keyCode === LEFT_ARROW) {
    novaX -= velocitat;
    meuComecocos.updateAngle('LEFT');
  } else if (keyCode === RIGHT_ARROW) {
    novaX += velocitat;
    meuComecocos.updateAngle('RIGHT');
  }

  // Comprovar si la nova posició és una roca
  let fila = Math.floor(novaY / 30); // Convertir la posició Y a coordenades de matriu
  let columna = Math.floor(novaX / 30); // Convertir la posició X a coordenades de matriu

  if (meuTauler.mapa[fila] && meuTauler.mapa[fila][columna] !== 1) {
    // Si no és una roca, mou el Comecocos
    meuComecocos.updatePosition(novaX, novaY);
  }

  // Assegurar que el Comecocos no surti del canvas.
  if (meuComecocos.y < 30 + meuComecocos.radi / 2) {
    meuComecocos.updatePosition(meuComecocos.x, 30 + meuComecocos.radi / 2);
  }
  if (meuComecocos.y > yCanvas - 30 - meuComecocos.radi / 2) {
    meuComecocos.updatePosition(meuComecocos.x, yCanvas - 30 - meuComecocos.radi / 2);
  }

  if (meuComecocos.x < 30 + meuComecocos.radi / 2 && (meuComecocos.y <= 270 || meuComecocos.y >= 330)) {
    meuComecocos.updatePosition(30 + meuComecocos.radi / 2, meuComecocos.y);
  }
  if (meuComecocos.x > xCanvas - 30 - meuComecocos.radi / 2 && (meuComecocos.y <= 270 || meuComecocos.y >= 330)) {
    meuComecocos.updatePosition(xCanvas - 30 - meuComecocos.radi / 2, meuComecocos.y);
  }

  // Permetre el pas pel túnel lateral
  if (meuComecocos.x > xCanvas) {
    meuComecocos.updatePosition(0, meuComecocos.y);
  }
  if (meuComecocos.x < 0) {
    meuComecocos.updatePosition(xCanvas, meuComecocos.y);
  }
}


// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;


