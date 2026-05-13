/* ===================================================== */
/* ===== PERSONAL EVOLUTION - SCRIPT ORGANIZADO ===== */
/* ===================================================== */

/*
SEÇÕES:
1. VARIÁVEIS
2. SOM DE CLIQUE
3. CONSTELAÇÃO
4. VOLTAR FILOSOFIA
5. TELA DE MÚSICAS
6. PLAYER DE MÚSICAS
*/

/* ===================================================== */
/* ===== 1. VARIÁVEIS ===== */
/* ===================================================== */

const constellation = document.getElementById("constellation");
const mainScreen = document.getElementById("mainScreen");
const philosophyScreen = document.getElementById("philosophyScreen");
const backButton = document.getElementById("backButton");
const musicButton = document.getElementById("musicButton");
const musicScreen = document.getElementById("musicScreen");
const musicBackButton = document.getElementById("musicBackButton");

const mainMusic = document.getElementById("mainMusic");
const musicVolume = document.getElementById("musicVolume");

const boatThorfinn = document.getElementById("boatThorfinn");
const musicSkyBackground = document.getElementById("musicSkyBackground");
const boatThors = document.getElementById("thorsBoat");
const boatAskeladd = document.getElementById("askeladdBoat");

const musicPlayButtons = document.querySelectorAll(".music-play-button");
const allButtons = document.querySelectorAll("button");

let clicks = 0;

/* ===================================================== */
/* ===== 2. SOM DE CLIQUE ===== */
/* ===================================================== */

function playClickSound() {
  const clickAudio = document.getElementById("clickSound");

  if (!clickAudio) return;

  clickAudio.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3";
  clickAudio.volume = 0.12;
  clickAudio.currentTime = 0;
  clickAudio.loop = false;
  clickAudio.play();
}

allButtons.forEach((button) => {
  button.addEventListener("click", playClickSound);
});

/* ===================================================== */
/* ===== 3. CONSTELAÇÃO ===== */
/* ===================================================== */

if (constellation) {
  constellation.addEventListener("click", () => {
    clicks++;

    constellation.classList.add("active");

    setTimeout(() => {
      constellation.classList.remove("active");
    }, 220);

    if (clicks >= 3) {
      clicks = 0;

      const mysteryAudio = document.getElementById("mysterySound");

      if (mysteryAudio) {
        mysteryAudio.pause();
        mysteryAudio.currentTime = 0;
        mysteryAudio.loop = false;
        mysteryAudio.src = "https://cdn.pixabay.com/download/audio/2022/10/16/audio_12b0f58ff0.mp3";
        mysteryAudio.volume = 0.28;
        mysteryAudio.play();
      }

      setTimeout(() => {
        mainScreen.classList.add("hidden");
        philosophyScreen.classList.remove("hidden");
      }, 700);
    }
  });
}

/* ===================================================== */
/* ===== 4. VOLTAR FILOSOFIA ===== */
/* ===================================================== */

if (backButton) {
  backButton.addEventListener("click", () => {
    philosophyScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
  });
}

/* ===================================================== */
/* ===== 5. TELA DE MÚSICAS ===== */
/* ===================================================== */

if (musicButton) {
  musicButton.addEventListener("click", () => {
    mainScreen.classList.add("hidden");
    philosophyScreen.classList.add("hidden");
    musicScreen.classList.remove("hidden");
  });
}

if (musicBackButton) {
  musicBackButton.addEventListener("click", () => {
    musicScreen.classList.add("hidden");
    mainScreen.classList.remove("hidden");
  });
}

/* ===================================================== */
/* ===== 6. PLAYER DE MÚSICAS ===== */
/* ===================================================== */

function resetMusicScenario() {
  if (boatThorfinn) boatThorfinn.classList.add("hidden");
  if (boatThors) boatThors.classList.add("hidden");
  if (boatAskeladd) boatAskeladd.classList.add("hidden");
  if (musicSkyBackground) musicSkyBackground.classList.add("hidden");

  mainScreen.classList.remove(
    "music-mode",
    "dagger-mode",
    "interwined-mode"
  );
}

if (musicVolume) {
  musicVolume.addEventListener("input", () => {
    mainMusic.volume = musicVolume.value / 100;
  });
}

musicPlayButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMusic = button.getAttribute("data-music");
    const isAlreadyPlaying = button.classList.contains("active-music");

    if (isAlreadyPlaying) {
      mainMusic.pause();
      mainMusic.currentTime = 0;

      button.classList.remove("active-music");

      resetMusicScenario();

      return;
    }

    musicPlayButtons.forEach((otherButton) => {
      otherButton.classList.remove("active-music");
    });

    button.classList.add("active-music");

    mainMusic.src = selectedMusic;
    mainMusic.volume = musicVolume.value / 100;
    mainMusic.loop = true;
    mainMusic.play();

    resetMusicScenario();

    if (selectedMusic.includes("Dagger")) {
      mainScreen.classList.add("music-mode", "dagger-mode");
      musicSkyBackground.classList.remove("hidden");
      boatThorfinn.classList.remove("hidden");
    }

    else if (selectedMusic.includes("Intertwined")) {
      mainScreen.classList.add("music-mode", "interwined-mode");
      musicSkyBackground.classList.remove("hidden");
      boatThors.classList.remove("hidden");
      boatAskeladd.classList.remove("hidden");
    }
  });
});
