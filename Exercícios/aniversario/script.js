// Build animated candles and decorative particles for the birthday sequence.
const candlesContainer = document.getElementById("candles");
const confettiContainer = document.getElementById("confetti");
const heartsContainer = document.getElementById("hearts");
const wishButton = document.getElementById("wishButton");
const wishGlow = document.getElementById("wishGlow");
const finalMessage = document.getElementById("finalMessage");

/**
 * Creates candles with staggered appearance and flame ignition.
 */
function createCandles(total = 5) {
  for (let i = 0; i < total; i += 1) {
    const candle = document.createElement("div");
    candle.className = "candle";
    candle.style.animationDelay = `${5 + i * 0.22}s`;

    const flame = document.createElement("span");
    flame.className = "flame";
    flame.style.setProperty("--flame-delay", `${5.8 + i * 0.22}s`);

    candle.appendChild(flame);
    candlesContainer.appendChild(candle);
  }
}

/**
 * Spawns one burst of confetti particles.
 */
function burstConfetti(total = 44) {
  for (let i = 0; i < total; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * 30 + 10}%`;
    piece.style.background = ["#f3a8be", "#ffd199", "#fce7a8", "#d9b8ff", "#b7e4d5"][
      Math.floor(Math.random() * 5)
    ];
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    confettiContainer.appendChild(piece);

    setTimeout(() => piece.remove(), 2000);
  }
}

/**
 * Creates subtle looped floating hearts in the background.
 */
function createFloatingHearts(total = 14) {
  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${8 + Math.random() * 8}s`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.setProperty("--size", `${8 + Math.random() * 12}px`);
    heartsContainer.appendChild(heart);
  }
}

/**
 * Extinguishes candle flames and reveals the final heartfelt line.
 */
function makeWish() {
  const flames = document.querySelectorAll(".flame");
  flames.forEach((flame, index) => {
    setTimeout(() => {
      flame.classList.add("off");
    }, index * 90);
  });

  wishGlow.classList.remove("active");
  // Force reflow so repeated clicks replay the glow animation.
  void wishGlow.offsetWidth;
  wishGlow.classList.add("active");
  finalMessage.classList.add("show");
  wishButton.disabled = true;
}

createCandles();
createFloatingHearts();

// Trigger confetti shortly after the flames start flickering.
setTimeout(() => {
  burstConfetti();
}, 6300);

wishButton.addEventListener("click", makeWish);
