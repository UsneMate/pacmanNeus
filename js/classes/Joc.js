// Importem totes les classes necessàries per al funcionament del joc
import Tauler from './Tauler.js';
import Comecocos from './Comecocos.js';
import Food from './Food.js';
import Cirera from './Cirera.js';

/**
 * Classe que gestiona el joc, incloent el tauler, els elements de menjar i el Comecocos.
 */
export default class Joc {
  /**
   * Crea una instància del joc i inicialitza els seus atributs.
   */
  constructor() {
    /**
     * Puntuació actual del jugador.
     * @type {number}
     */
    this.puntuacio = 0;

    /**
     * Instància del Comecocos.
     * @type {Comecocos}
     */
    this.meuComecocos = new Comecocos(30, 300, 30, "Yellow");

    /**
     * Instància del Tauler.
     * @type {Tauler}
     */
    this.meuTauler = new Tauler();

    /**
     * Llista d'objectes de menjar (Food).
     * @type {Food[]}
     */
    this.foodItems = [];

    /**
     * Llista d'objectes de cireres.
     * @type {Cirera[]}
     */
    this.cireres = [];

    /**
     * Llista d'objectes de foc (futur desenvolupament).
     * @type {Array}
     */
    this.focs = [];

    // Imatges del joc
    this.imgPared = null;
    this.imgMenjar = null;
    this.imgCirera = null;
    this.imgFoc = null;

    /**
     * Temps d'inici de la partida.
     * @type {number}
     */
    this.tempsInici = 0;

    /**
     * Indica si el joc està actiu.
     * @type {boolean}
     */
    this.jocActiu = true;
  }

  /**
   * Inicia una nova partida reiniciant variables i repartint el menjar.
   */
  iniciarPartida() {
    this.tempsInicial = millis();
    this.jocActiu = true;
    this.puntuacio = 0;
    this.repartirMenjar();
  }

  /**
   * Finalitza la partida i mostra un missatge a la consola.
   */
  finalitzarPartida() {
    try {
      this.jocActiu = false;
      console.log("Partida finalitzada.");
    } catch (error) {
      console.error("Error en finalitzar la partida: ", error.message);
    }
  }

  /**
   * Calcula el temps transcorregut des de l'inici de la partida.
   * @returns {number} - Temps en mil·lisegons des de l'inici de la partida.
   */
  tempsTranscorregut() {
    try {
      if (this.jocActiu) {
        return millis() - this.tempsInici;
      }
      return 0;
    } catch (error) {
      console.error("Error en calcular el temps transcorregut: ", error.message);
    }
  }

  /**
   * Reparteix menjar i cireres al tauler en funció del mapa.
   */
  repartirMenjar() {
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

  /**
   * Carrega les imatges necessàries per al joc.
   */
  preload() {
    try {
      this.imgPared = loadImage("../img/roca.png", img => {
        console.log("Imatge de roca carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la roca.");
      });

      this.imgMenjar = loadImage("../img/food.png", img => {
        console.log("Imatge de menjar carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge del menjar.");
      });

      this.imgCirera = loadImage("../img/cerezas.png", img => {
        console.log("Imatge de cirera carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge de la cirera.");
      });

      this.imgFoc = loadImage("../img/llam0006.gif", img => {
        console.log("Imatge de foc carregada correctament.");
      }, error => {
        throw new Error("Error en carregar la imatge del foc.");
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  /**
   * Dibuixa el tauler amb les parets i els elements de foc.
   */
  dibuixarTauler() {
    for (let i = 0; i < this.meuTauler.mapa.length; i++) {
      for (let j = 0; j < this.meuTauler.mapa[i].length; j++) {
        if (this.meuTauler.mapa[i][j] === 1) {
          image(this.imgPared, j * 30, i * 30, 30, 30);
        }
        if (this.meuTauler.mapa[i][j] === 4) {
          image(this.imgFoc, j * 30, i * 30, 30, 30);
        }
      }
    }
  }

  /**
   * Dibuixa el Comecocos.
   */
  dibuixarComecocos() {
    this.meuComecocos.drawComecocos();
  }

  /**
   * Dibuixa el menjar i les cireres i comprova col·lisions.
   */
  dibuixarMenjar() {
    this.foodItems.forEach(food => {
      food.drawFood(this.imgMenjar);
      this.puntuacio += food.checkCollisionFood(
        this.meuComecocos.x,
        this.meuComecocos.y,
        this.meuComecocos.radi
      );
    });

    this.cireres.forEach(cirera => {
      cirera.drawFoodCirera(this.imgCirera);
      this.puntuacio += cirera.checkCollisionCirera(
        this.meuComecocos.x,
        this.meuComecocos.y,
        this.meuComecocos.radi
      );
    });
  }

  /**
   * Comprova si una casella és una roca.
   * @param {number} fila - Fila de la casella.
   * @param {number} columna - Columna de la casella.
   * @returns {boolean} - True si és una roca, false si no ho és.
   */
  esRoca(fila, columna) {
    return this.meuTauler.mapa[fila][columna] === 1;
  }

  /**
   * Comprova si una casella és foc.
   * @param {number} fila - Fila de la casella.
   * @param {number} columna - Columna de la casella.
   * @returns {boolean} - True si és foc, false si no ho és.
   */
  esFoc(fila, columna) {
    return this.meuTauler.mapa[fila][columna] === 4;
  }

  /**
   * Assegura que el Comecocos no surti dels límits del tauler.
   * @param {number} xCanvas - Amplada del canvas.
   * @param {number} yCanvas - Alçada del canvas.
   */
  comprovarLimits(xCanvas, yCanvas) {
    if (this.meuComecocos.y < 30 + this.meuComecocos.radi / 2) {
      this.meuComecocos.updatePosition(this.meuComecocos.x, 30 + this.meuComecocos.radi / 2);
    }
    if (this.meuComecocos.y > yCanvas - 30 - this.meuComecocos.radi / 2) {
      this.meuComecocos.updatePosition(this.meuComecocos.x, yCanvas - 30 - this.meuComecocos.radi / 2);
    }

    if (this.meuComecocos.x > xCanvas) {
      this.meuComecocos.updatePosition(0, this.meuComecocos.y);
    }
    if (this.meuComecocos.x < 0) {
      this.meuComecocos.updatePosition(xCanvas, this.meuComecocos.y);
    }
  }
}
