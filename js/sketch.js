import Comecocos from "./classes/Comecocos.js";
import Tauler from "./classes/Tauler.js";   // Importa la classe Tauler

// Variables globals
let meuComecocos;
let meuTauler;
let imgPared;// Instància del Tauler

// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 600;

// Variable amb la velocitat de moviment
let velocitat = 15;

function preload() {
  // Carregar la imatge de la paret
  imgPared = loadImage("../img/roca.png"); // Substitueix per la ruta correcta de la teva imatge
}

function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  // Crear instàncies de Comecocos i Tauler
  meuComecocos = new Comecocos(30, 300, 30, "Yellow");
  meuTauler = new Tauler();

}

function draw() {
  background(200);

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

  // Comprovar si la nova posició és una roca (1)
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


