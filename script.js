document.addEventListener('keydown', (e) => {
  const audio = document.getElementById(e.key.toUpperCase());
  if (audio) {
    playSound(e.key.toUpperCase());
  }
});

function playSound(key) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0; // Rebobine au début
    audio.play();
    updateDisplay(key);
  }
}

function updateDisplay(key) {
  const display = document.getElementById('display');
  // Ici, vous pourriez avoir une logique pour afficher une description en fonction de la touche
  display.innerText = `Playing: ${key}`; // Exemple de message
}
