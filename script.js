// Al hacer clic en la imagen de la runa, activamos el glitch total
document.addEventListener("DOMContentLoaded", () => {
  const runa = document.querySelector(".runa-img");
  const glitchText = document.querySelector(".mensaje-glitch");

  if (runa && glitchText) {
    runa.addEventListener("click", () => {
      document.body.classList.add("glitch-activated");
      glitchText.style.display = "block";
      console.log("🔥 GLITCH TOTAL ACTIVADO 🔥");
    });
  } else {
    console.log("❌ No se encontró la runa o el texto glitch.");
  }
});
