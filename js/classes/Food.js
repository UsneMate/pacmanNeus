// Food.js
export default class Food {
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
  drawFood(imgMenjar) {
    if (!this.#menjat) {
      image(imgMenjar, this.#x, this.#y, 30, 30);
    }
  }

  // dist(x1, y1, x2, y2) {
  //   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  // }
  // Mètode per comprovar si el comecocos ha menjat el menjar
  checkCollisionFood(comeCocosX, comeCocosY, radi) {
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
  /*setPunts(punts) {
    this.#punts = punts;
  }*/
}
