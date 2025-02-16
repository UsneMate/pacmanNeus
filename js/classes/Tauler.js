// Tauler.js
export default class Tauler {
  constructor() {}

  // Mètode per dibuixar el tauler
  drawTauler() {
    this.drawParedsVerticals();
    this.drawParedsHoritzontals();
  }

  // Funció per dibuixar les pareds verticals
  drawParedsVerticals() {
    fill(0);
    rect(0, 0, 30, 270);          // Parets esquerres
    rect(0, 330, 30, 250);
    rect(570, 0, 30, 270);        // Parets dretes
    rect(570, 330, 30, 270);
  }

  // Funció per dibuixar les pareds horitzontals
  drawParedsHoritzontals() {
    fill(0);
    rect(30, 0, 540, 30);         // Parets superior
    rect(0, 570, 600, 30);        // Parets inferior
  }
}
