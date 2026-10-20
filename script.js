// Boceto visual — interacciones locales, sin envío de datos ni conexiones externas.
(function () {
  "use strict";

  // Menú móvil
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Aparición suave al hacer scroll
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  // Botón de contacto: solo estado visual, no envía nada
  var btn = document.getElementById("infoBtn");
  var note = document.getElementById("btnNote");
  if (btn && note) {
    btn.addEventListener("click", function () {
      btn.classList.add("clicked");
      note.textContent = "Botón de demostración: en el sitio final aquí se conectaría un medio de contacto real.";
    });
  }
})();