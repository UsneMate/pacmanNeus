// Cirera.js
import Food from "./Food.js";

export default class Cirera extends Food {  // Hereta de Food
  constructor(x, y, img) {
    super(x, y, 50); // La cirera tindrà 50 punts
    this.img = img; // Afegeix la imatge de la cirera
  }

  // Mètode per dibuixar la cirera
  drawCirera() {
    this.drawFood(this.img); // Utilitza el mètode de Food per dibuixar la imatge
  }
}
