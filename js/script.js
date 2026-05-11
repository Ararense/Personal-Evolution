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

  /* EFEITO CLICK */

  constellation.classList.add("active");

  setTimeout(() => {
    constellation.classList.remove("active");
  }, 250);

  /* SOM SIMPLES */

  const audio = new Audio(
    "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
  );

  audio.volume = 0.2;

  audio.play();

  /* APÓS 3 CLICKS */

  if (clicks >= 3) {

    const mystery = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3"
    );

    mystery.volume = 0.4;

    mystery.play();

    setTimeout(() => {

      mainScreen.classList.add("hidden");

      philosophyScreen.classList.remove("hidden");

      clicks = 0;

    }, 900);
  }

});

/* ===================================================== */
/* ===== 3. SISTEMA VOLTAR ===== */
/* ===================================================== */

backButton.addEventListener("click", () => {

  philosophyScreen.classList.add("hidden");

  mainScreen.classList.remove("hidden");

});
