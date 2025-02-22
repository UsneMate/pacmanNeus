import Joc from "./classes/Joc.js";

let joc;

// Coordenades de la mida del canvas
let xCanvas = 600;
let yCanvas = 700;

// Variable amb la velocitat de moviment
let velocitat = 15;

/**
 * Funció per carregar els recursos abans de l'inici del joc.
 * Aquesta funció es crida abans de la configuració inicial.
 */
function preload() {
  joc = new Joc();
  joc.preload();
}

/**
 * Funció per configurar la finestra del joc.
 * Aquesta funció es crida un cop abans de començar el dibuix del joc.
 */
function setup() {
  createCanvas(xCanvas, yCanvas);
  angleMode(DEGREES);

  // Crear instàncies de Comecocos i Tauler
  // meuComecocos = new Comecocos(30, 300, 30, "Yellow");
  // meuTauler = new Tauler();

  // Inicialitzar el joc
  joc.iniciarPartida();
}

/**
 * Funció principal per dibuixar a la pantalla i actualitzar el joc.
 * Aquesta funció es crida en cada fotograma del joc.
 */
function draw() {
  background(190);
  joc.dibuixarTauler();

  // Dibuixa el Comecocos
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

  // Si el temps arriba a 30 segons, finalitza la partida
  if(temps >= 60000){
    joc.finalitzarPartida();
    textSize(80);
    fill(0);
    text("Temps finalitzat!", xCanvas / 2, yCanvas / 2);
    noLoop(); // Atura el dibuix després de finalitzar la partida
  }
}

/**
 * Funció que detecta les tecles pressionades i mou el Comecocos.
 * Aquesta funció es crida cada cop que es prem una tecla.
 */
function keyPressed() {
  // Si el joc no està actiu, no es fa res
  if (!joc.jocActiu) return;

  // Definir les noves coordenades de destí
  let novaX = joc.meuComecocos.x;
  let novaY = joc.meuComecocos.y;

  // Moviments segons la direcció
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

  // Comprovar si la nova posició és una roca o un foc
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
  // Comprovar els límits del joc (evitar que el Comecocos surti de la pantalla)
  joc.comprovarLimits(xCanvas, yCanvas);
}

// Declarem les funcions globalment per a p5.js
globalThis.setup = setup;
globalThis.draw = draw;
globalThis.keyPressed = keyPressed;
globalThis.preload = preload;
