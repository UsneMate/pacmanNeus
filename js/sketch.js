import Joc from "./classes/Joc.js";

let joc;

// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 700;

// Variable amb la velocitat de moviment
let velocitat = 15;

function preload() {
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
  // joc.repartirMenjar();
  joc.iniciarPartida();
}

function draw() {
  background(190);
  joc.dibuixarTauler();

  // Dibuixa el Comecocos
  //joc.meuComecocos.drawComecocos();
  joc.dibuixarComecocos();

  // Dibuixa el menjar i comprova si el Comecocos el menja
  joc.dibuixarMenjar();

  // Mostrar puntuació
  fill(0);
  textSize(20);
  textAlign(CENTER);
  text("Puntuació: " + joc.puntuacio, xCanvas / 2 -30, yCanvas -50);

  let temps = joc.tempsTranscorregut();
  text("Temps: " + Math.floor(temps/1000) + "s", xCanvas / 2 -30, yCanvas - 20);

  if(temps >= 30000){
    joc.finalitzarPartida();
    textSize(50);
    fill(0);
    text("Temps finalitzat!", xCanvas / 2, yCanvas / 2);
  }
}

// Funció per detectar tecles i moure el Comecocos
function keyPressed() {

  if (!joc.jocActiu) return; // No es mou si la partida ha acabat

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

  // Comprovar si la casella és una roca o un foc
  if (!joc.esRoca(fila, columna) && !joc.esFoc(fila, columna)) {
    // Si no és ni roca ni foc, el Comecocos es pot moure
    joc.meuComecocos.updatePosition(novaX, novaY);
  } else {
    // Si és una roca, resta 10 punts; si és foc, resta 50 punts
    if (joc.esRoca(fila, columna)) {
      joc.puntuacio -= 10;
    }
    if (joc.esFoc(fila, columna)) {
      joc.puntuacio -= 50;
    }
  }
  joc.comprovarLimits(xCanvas, yCanvas);
}


// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;
