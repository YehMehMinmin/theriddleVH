document.addEventListener("DOMContentLoaded", () => {
  const fraseFinal = document.getElementById("frase-final");
  const glitchDialogo = document.getElementById("glitch-dialogo");
  const boton = document.getElementById("acertijo-boton");

  fraseFinal.addEventListener("click", () => {
    document.body.classList.add("glitch-activated");
    glitchDialogo.style.display = "block";
    boton.style.display = "block";
    console.log("💥 DIÁLOGO GLITCHEADO 💥");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fraseFinal = document.getElementById("frase-final");
  const glitchDialogo = document.getElementById("glitch-dialogo");
  const boton = document.getElementById("acertijo-boton");

  // Encriptación mágica: A=1, ..., Z=26
  const alfabetoMágico = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const codificarTexto = (texto) => {
    return texto.toUpperCase().split("").map(char => {
      if (alfabetoMágico.includes(char)) {
        return alfabetoMágico.indexOf(char) + 1;
      } else {
        return char;
      }
    }).join(" ");
  };

  // Función de glitch visual
  const activarGlitch = () => {
    document.body.classList.add("glitch-activated");
    glitchDialogo.style.display = "block";
    boton.style.display = "block";
    console.log("💥 DIÁLOGO GLITCHEADO 💥");

    // Encriptar todos los párrafos en glitchDialogo
    const parrafos = glitchDialogo.querySelectorAll("p");
    parrafos.forEach((p, i) => {
      const original = p.innerText;
      const encriptado = codificarTexto(original);

      // Glitch reveal
      p.innerText = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index <= encriptado.length) {
          p.innerText = encriptado.slice(0, index) + "_";
          index++;
        } else {
          clearInterval(interval);
          p.innerText = original;
        }
      }, 40 + i * 10); // delay según posición
    });
  };

  // Evento al hacer clic en la última frase
  if (fraseFinal) {
    fraseFinal.addEventListener("click", activarGlitch);
  }
});
