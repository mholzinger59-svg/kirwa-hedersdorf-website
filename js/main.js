// Burger‑Menü öffnen/schließen
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  // Einfacher Login‑Mock (nur als Hinweis, später wird das Backend übernommen)
  const loginForm = document.querySelector(".login-form form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const user = this.username.value;
      const pass = this.password.value;

      if (user === "admin" && pass === "kirwa123") {
        // Beispiel: nach „Login“ eine kleine Info anzeigen
        const main = document.querySelector(".main");
        main.insertAdjacentHTML(
          "afterend",
          `<div class="admin-panel">
            <h4>ADMIN‑MOCK AKTIV</h4>
            <p>Du bist jetzt eingeloggt. In der echten Version könntest du hier
               Texte, Bilder und Logos bearbeiten.</p>
          </div>`
        );
      } else {
        alert("Falscher Login (für Demo: User=admin, Passwort=kirwa123)");
      }
    });
  }
});
