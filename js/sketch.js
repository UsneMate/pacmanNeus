import Comecocos from "./classes/Comecocos.js";
import Tauler from "./classes/Tauler.js";   // Importa la classe Tauler

// Variables globals
let meuComecocos;
let meuTauler;                             // Instància del Tauler

// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 600;

// Variable amb la velocitat de moviment
let velocitat = 15;

function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  // Crear instàncies de Comecocos i Tauler
  meuComecocos = new Comecocos(100, 240, 40, "Yellow");
  meuTauler = new Tauler();
}

function draw() {
  background(220);

  // Dibuixa el tauler
  meuTauler.drawTauler();

  // Dibuixa el Comecocos
  meuComecocos.drawComecocos();
}

// Funció per detectar tecles i moure el Comecocos
function keyPressed() {
  // Moviments i angles segons la direcció
  if (keyCode === UP_ARROW) {
    meuComecocos.updatePosition(meuComecocos.x, meuComecocos.y - velocitat);
    meuComecocos.updateAngle('UP');
  } else if (keyCode === DOWN_ARROW) {
    meuComecocos.updatePosition(meuComecocos.x, meuComecocos.y + velocitat);
    meuComecocos.updateAngle('DOWN');
  } else if (keyCode === LEFT_ARROW) {
    meuComecocos.updatePosition(meuComecocos.x - velocitat, meuComecocos.y);
    meuComecocos.updateAngle('LEFT');
  } else if (keyCode === RIGHT_ARROW) {
    meuComecocos.updatePosition(meuComecocos.x + velocitat, meuComecocos.y);
    meuComecocos.updateAngle('RIGHT');
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

