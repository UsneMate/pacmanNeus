// Quan la pàgina carregui
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("startGame").addEventListener("click", startGame);
  document.getElementById("help").addEventListener("click", showHelp);
  document.getElementById("info").addEventListener("click", showInfo);
  document.getElementById("credits").addEventListener("click", showCredits);
  document.getElementById("backToMenu").addEventListener("click", backToMenu);

  // Afegir event als botons de tancar
  document.querySelectorAll(".close-btn").forEach(button => {
    button.addEventListener("click", function() {
      closeScreen(this.dataset.screen);
    });
  });
});

// Funció per iniciar el joc
function startGame() {
  document.getElementById("menuContainer").classList.add("hidden"); // Amagar menú
  document.getElementById("gameContainer").classList.remove("hidden"); // Mostrar joc
  //startP5Game(); // Iniciar el joc amb p5.js
}

// Funció per tornar al menú
function backToMenu() {
  document.getElementById("menuContainer").classList.remove("hidden"); // Mostrar menú
  document.getElementById("gameContainer").classList.add("hidden"); // Amagar joc
}

// Funció per mostrar la pantalla d'ajuda
function showHelp() {
  document.getElementById("helpScreen").classList.remove("hidden");
}

// Funció per mostrar la informació del navegador i SO
function showInfo() {
  document.getElementById("infoScreen").classList.remove("hidden");
  document.getElementById("browserInfo").textContent = navigator.userAgent;
  document.getElementById("browserVersion").textContent = navigator.appVersion;
  document.getElementById("osInfo").textContent = navigator.platform;
  document.getElementById("lastModified").textContent = document.lastModified;
  document.getElementById("language").textContent = navigator.language;
  document.getElementById("hostname").textContent = window.location.hostname;
}

// Funció per mostrar la pantalla de crèdits
function showCredits() {
  document.getElementById("creditsScreen").classList.remove("hidden");
}

// Funció per tancar les pantalles d'ajuda, informació i crèdits
function closeScreen(screenId) {
  document.getElementById(screenId).classList.add("hidden");
}

document.querySelectorAll(".close-btn").forEach(button => {
  button.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que altres esdeveniments es propaguin
    closeScreen(this.dataset.screen);
  });
});

