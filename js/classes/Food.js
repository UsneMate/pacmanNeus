/**
 * Classe que representa un element de menjar dins del joc.
 */
export default class Food {
  /**
   * Posició X del menjar.
   * @type {number}
   * @private
   */
  #x;

  /**
   * Posició Y del menjar.
   * @type {number}
   * @private
   */
  #y;

  /**
   * Punts que atorga aquest menjar en ser menjat.
   * @type {number}
   * @private
   */
  #punts;

  /**
   * Indica si el menjar ha estat menjat o no.
   * @type {boolean}
   * @private
   */
  #menjat;

  /**
   * Crea una instància de Food.
   * @param {number} x - Posició X del menjar.
   * @param {number} y - Posició Y del menjar.
   * @param {number} punts - Quantitat de punts que dona aquest menjar.
   */
  constructor(x, y, punts) {
    this.#x = x;
    this.#y = y;
    this.#punts = punts;
    this.#menjat = false;
  }

  /**
   * Dibuixa el menjar si encara no ha estat menjat.
   * @param {p5.Image} imgMenjar - Imatge que es dibuixarà per representar el menjar.
   */
  drawFood(imgMenjar) {
    if (!this.#menjat) {
      image(imgMenjar, this.#x, this.#y, 30, 30);
    }
  }

  /**
   * Comprova si el Comecocos ha col·lisionat amb el menjar.
   * Si és així, el menjar es marca com a menjat i es retorna la seva puntuació.
   * @param {number} comeCocosX - Posició X del Comecocos.
   * @param {number} comeCocosY - Posició Y del Comecocos.
   * @param {number} radi - Radi del Comecocos.
   * @returns {number} - Punts atorgats si es menja, 0 si no es menja.
   */
  checkCollisionFood(comeCocosX, comeCocosY, radi) {
    if (!this.#menjat && dist(this.#x, this.#y, comeCocosX, comeCocosY) < radi) {
      this.#menjat = true;
      return this.#punts;
    }
    return 0;
  }

  // /**
  //  * Modifica la quantitat de punts que atorga aquest menjar.
  //  * @param {number} punts - Nova quantitat de punts.
  //  */
  // setPunts(punts) {
  //   this.#punts = punts;
  // }
}
