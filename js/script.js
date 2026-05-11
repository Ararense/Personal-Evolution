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
2. SISTEMA CONSTELAÇÃO
3. SISTEMA VOLTAR
*/

/* ===================================================== */
/* ===== 1. VARIÁVEIS ===== */
/* ===================================================== */

const constellation =
document.getElementById("constellation");

const mainScreen =
document.getElementById("mainScreen");

const philosophyScreen =
document.getElementById("philosophyScreen");

const backButton =
document.getElementById("backButton");

let clicks = 0;

/* ===================================================== */
/* ===== 2. SISTEMA CONSTELAÇÃO ===== */
/* ===================================================== */

constellation.addEventListener("click", () => {

  clicks++;

  constellation.classList.add("active");

  setTimeout(() => {
    constellation.classList.remove("active");
  }, 220);

  const clickAudio = document.getElementById("clickSound");

  clickAudio.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3";
  clickAudio.volume = 0.15;
  clickAudio.currentTime = 0;
  clickAudio.loop = false;
  clickAudio.play();

  if (clicks >= 3) {

    clicks = 0;

    const mysteryAudio = document.getElementById("mysterySound");

    mysteryAudio.pause();
    mysteryAudio.currentTime = 0;
    mysteryAudio.loop = false;
    mysteryAudio.src = "https://cdn.pixabay.com/download/audio/2022/10/16/audio_12b0f58ff0.mp3";
    mysteryAudio.volume = 0.35;
    mysteryAudio.play();

    setTimeout(() => {
      mainScreen.classList.add("hidden");
      philosophyScreen.classList.remove("hidden");
    }, 700);

  }

});

/* ===================================================== */
/* ===== 3. SISTEMA VOLTAR ===== */
/* ===================================================== */

backButton.addEventListener("click", () => {

  philosophyScreen.classList.add("hidden");

  mainScreen.classList.remove("hidden");

});
