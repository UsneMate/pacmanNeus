/**
 * Classe que representa el personatge principal, Comecocos.
 */
export default class Comecocos {
  /**
   * Crea una instància de Comecocos.
   * @param {number} x - Posició X inicial del Comecocos.
   * @param {number} y - Posició Y inicial del Comecocos.
   * @param {number} radi - Radi del Comecocos.
   * @param {string} color - Color del Comecocos.
   */
  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.color = color;
    this.angleInici = 40;
    this.angleFi = 330;
  }

  /**
   * Dibuixa el Comecocos a la seva posició actual.
   */
  drawComecocos() {
    fill(this.color);
    arc(this.x, this.y, this.radi, this.radi, this.angleInici, this.angleFi);
  }

  /**
   * Actualitza l'angle de la boca del Comecocos segons la direcció de moviment.
   * @param {string} direction - Direcció del moviment ('UP', 'DOWN', 'LEFT', 'RIGHT').
   */
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

  /**
   * Actualitza la posició del Comecocos.
   * @param {number} x - Nova posició X.
   * @param {number} y - Nova posició Y.
   */
  updatePosition(x, y) {
    this.x = x;
    this.y = y;
  }
}
