export default class Comecocos {
  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.color = color;
    this.angleInici = 40;
    this.angleFi = 330;
  }

  // Mètode per dibuixar el comecocos
  drawComecocos() {
    fill(this.color);
    arc(this.x, this.y, this.radi, this.radi, this.angleInici, this.angleFi);
  }

  updateAngle(direction) {
    if (direction === 'UP') {
      this.angleInici = 300;
      this.angleFi = 240;
    } else if (direction === 'DOWN') {
      this.angleInici = 125;
      this.angleFi = 55;
    } else if (direction === 'LEFT') {
      this.angleInici = 210;
      this.angleFi = 135;
    } else if (direction === 'RIGHT') {
      this.angleInici = 40;
      this.angleFi = 330;
    }
  }

  // Mètode per actualitzar la posició (només moviments)
  updatePosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
