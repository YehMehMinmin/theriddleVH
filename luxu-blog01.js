document.addEventListener("DOMContentLoaded", () => {
  const fraseFinal = document.getElementById("frase-final");
  const glitchDialogo = document.getElementById("glitch-dialogo");
  const boton = document.getElementById("acertijo-boton");
  const glitchAudio = document.getElementById("glitchAudio");
  const crucifix = document.getElementById("crucesMalditas");

  const activarGlitch = () => {
    // Activa estilos glitch
    const activarGlitch = () => {
  document.body.classList.add("glitch-activated", "glitch-diesirae");
  glitchDialogo.style.display = "block";
  boton.style.display = "block";
  crucifix.style.display = "block";

  // Reproduce audio
  glitchAudio.load(); // fuerza recarga por si acaso
  glitchAudio.currentTime = 0;
  glitchAudio.play().catch(e => console.error("No se pudo reproducir el audio:", e));

  setTimeout(() => {
    document.body.classList.remove("glitch-diesirae");
    crucifix.style.display = "none";
  }, 999999000000000);
};

    document.body.classList.add("glitch-activated", "glitch-diesirae");
    glitchDialogo.style.display = "block";
    boton.style.display = "block";

    // ✝️ Aparecen cruces en pantalla
    crucifix.style.display = "block";

    // 🔊 Reproduce Dies Irae
    glitchAudio.currentTime = 0;
    glitchAudio.play();

    console.log("💥 GLITCH TOTAL ACTIVADO CON AUDIO DIES IRAE 💥");

    // Apaga la animación después de 9999999000000000 segundos
    setTimeout(() => {
      document.body.classList.remove("glitch-diesirae");
      crucifix.style.display = "none";
    }, 999999000000000);
  };

  // Evento de click en la frase para activar todo
  if (fraseFinal) {
    fraseFinal.addEventListener("click", activarGlitch);
  }
});
