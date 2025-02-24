/**
 * Classe que representa una cirera en el joc.
 */
export default class PowerUp {
  /** @type {number} Coordenada X de la cirera */
  #x;
  /** @type {number} Coordenada Y de la cirera */
  #y;
  /** @type {number} Punts que dona la cirera en ser menjada */
  #punts;
  /** @type {boolean} Indica si la cirera ha estat menjada */
  #menjat;

  constructor(x, y, punts) {
    this.#x = x;
    this.#y = y;
    this.#punts = punts;
    this.#menjat = false;
  }

  drawPowerUp(img) {
    if (!this.#menjat) {
      image(img, this.#x, this.#y, 30, 30);
    }
  }

  checkCollisionPowerUp(comeCocosX, comeCocosY, radi) {
    if (!this.#menjat && dist(this.#x, this.#y, comeCocosX, comeCocosY) < radi) {
      this.#menjat = true;
      return this.#punts;
    }
    return 0;
  }

  setPunts(punts) {
    this.#punts = punts;
  }
}
