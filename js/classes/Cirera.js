export default class Cirera {
  // Atributs privats amb #
  #x;
  #y;
  #punts;
  #menjat;

  constructor(x, y, punts) {
    this.#x = x;
    this.#y = y;
    this.#punts = punts;
    this.#menjat = false;
  }

  // Mètode per dibuixar el menjar si no ha estat menjat
  drawFoodCirera(imgMenjar) {
    if (!this.#menjat) {
      image(imgMenjar, this.#x, this.#y, 30, 30);
    }
  }

  // Mètode per comprovar si el comecocos ha menjat el menjar
  checkCollision(comeCocosX, comeCocosY, radi) {
    if (
      !this.#menjat &&
      dist(this.#x, this.#y, comeCocosX, comeCocosY) < radi
    ) {
      this.#menjat = true;
      return this.#punts;
    }
    return 0;
  }

  // Afegim un setter per poder modificar els punts
  setPunts(punts) {
    this.#punts = punts;
  }
}
