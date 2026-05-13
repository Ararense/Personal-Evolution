/* ===================================================== */
/* ===== PERSONAL EVOLUTION - SCRIPT ORGANIZADO ===== */
/* ===================================================== */

/*
IMPORTANTE:

- NÃO REMOVER OS TÍTULOS DAS SEÇÕES
- FUTURAS ALTERAÇÕES SERÃO FEITAS
  APENAS NAS PARTES NECESSÁRIAS

SEÇÕES:
1. VARIÁVEIS
2. FUNÇÃO DE SOM DE CLIQUE
3. SISTEMA CONSTELAÇÃO
4. SISTEMA VOLTAR FILOSOFIA
5. SISTEMA TELA DE MÚSICAS
6. SISTEMA PLAYER DE MÚSICAS
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

const allButtons = document.querySelectorAll("button");

const musicPlayButtons = document.querySelectorAll(".music-play-button");

let clicks = 0;

/* ===================================================== */
/* ===== 2. FUNÇÃO DE SOM DE CLIQUE ===== */
/* ===================================================== */

function playClickSound() {
  const clickAudio = document.getElementById("clickSound");

  clickAudio.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3";
  clickAudio.volume = 0.12;
  clickAudio.currentTime = 0;
  clickAudio.loop = false;
  clickAudio.play();
}

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playClickSound();
  });
});

/* ===================================================== */
/* ===== 3. SISTEMA CONSTELAÇÃO ===== */
/* ===================================================== */

constellation.addEventListener("click", () => {

  clicks++;

  constellation.classList.add("active");

  setTimeout(() => {
    constellation.classList.remove("active");
  }, 220);

  playClickSound();

  if (clicks >= 3) {

    clicks = 0;

    const mysteryAudio = document.getElementById("mysterySound");

    mysteryAudio.pause();
    mysteryAudio.currentTime = 0;
    mysteryAudio.loop = false;
    mysteryAudio.src = "https://cdn.pixabay.com/download/audio/2022/10/16/audio_12b0f58ff0.mp3";
    mysteryAudio.volume = 0.28;
    mysteryAudio.play();

    setTimeout(() => {
      mainScreen.classList.add("hidden");
      philosophyScreen.classList.remove("hidden");
    }, 700);

  }

});

/* ===================================================== */
/* ===== 4. SISTEMA VOLTAR FILOSOFIA ===== */
/* ===================================================== */

backButton.addEventListener("click", () => {

  philosophyScreen.classList.add("hidden");

  mainScreen.classList.remove("hidden");

});

/* ===================================================== */
/* ===== 5. SISTEMA TELA DE MÚSICAS ===== */
/* ===================================================== */

musicButton.addEventListener("click", () => {

  mainScreen.classList.add("hidden");

  philosophyScreen.classList.add("hidden");

  musicScreen.classList.remove("hidden");

});

musicBackButton.addEventListener("click", () => {

  musicScreen.classList.add("hidden");

  mainScreen.classList.remove("hidden");

});

/* ===================================================== */
/* ===== 6. SISTEMA PLAYER DE MÚSICAS ===== */
/* ===================================================== */

musicVolume.addEventListener("input", () => {
  mainMusic.volume = musicVolume.value / 100;
});

musicPlayButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedMusic = button.getAttribute("data-music");

    const isAlreadyPlaying = button.classList.contains("active-music");

    const musicSkyBackground = document.getElementById("musicSkyBackground");

    const boatThors = document.getElementById("boatThors");

    const boatAskeladd = document.getElementById("boatAskeladd");

    function resetMusicScenario() {
      boatThorfinn.classList.add("hidden");
      boatThors.classList.add("hidden");
      boatAskeladd.classList.add("hidden");
      musicSkyBackground.classList.add("hidden");

      mainScreen.classList.remove(
        "music-mode",
        "dagger-mode",
        "interwined-mode"
      );
    }

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

    if (selectedMusic.includes("Intertwined")) {
      mainScreen.classList.add("music-mode", "interwined-mode");
      musicSkyBackground.classList.remove("hidden");
      boatThors.classList.remove("hidden");
      boatAskeladd.classList.remove("hidden");
    }

  });

});

    /* ===================================== */
    /* PARAR MÚSICA */
    /* ===================================== */

    if (isAlreadyPlaying) {

      mainMusic.pause();

      mainMusic.currentTime = 0;

      button.classList.remove("active-music");

      boatThorfinn.classList.add("hidden");

      return;
    }

    /* ===================================== */
    /* TOCAR NOVA MÚSICA */
    /* ===================================== */

    musicPlayButtons.forEach((otherButton) => {
      otherButton.classList.remove("active-music");
    });

    button.classList.add("active-music");

    mainMusic.src = selectedMusic;

    mainMusic.volume =
    musicVolume.value / 100;

    mainMusic.loop = true;

    mainMusic.play();

/* ===================================== */
/* CENÁRIOS DAS MÚSICAS */
/* ===================================== */

const musicSkyBackground =
document.getElementById("musicSkyBackground");

const boatThors =
document.getElementById("boatThors");

const boatAskeladd =
document.getElementById("boatAskeladd");

/* RESETAR */

boatThorfinn.classList.add("hidden");

boatThors.classList.add("hidden");

boatAskeladd.classList.add("hidden");

mainScreen.classList.remove(
  "music-mode",
  "dagger-mode",
  "interwined-mode"
);

/* ===================================== */
/* DAGGER */
/* ===================================== */

if (
  selectedMusic.includes("Dagger")
) {

  mainScreen.classList.add(
    "music-mode",
    "dagger-mode"
  );

  boatThorfinn.classList.remove("hidden");
}

/* ===================================== */
/* INTERWINED */
/* ===================================== */

else if (
  selectedMusic.includes("Intertwined")
) {

  mainScreen.classList.add(
    "music-mode",
    "interwined-mode"
  );

  boatThors.classList.remove("hidden");

  boatAskeladd.classList.remove("hidden");
}

  });

});
