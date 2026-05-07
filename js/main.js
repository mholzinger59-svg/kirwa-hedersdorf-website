document.addEventListener("DOMContentLoaded", function () {
  // =====================
  // 1. Burger‑Menü öffnen / schließen
  // =====================

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  // =====================
  // 2. Bild‑Modal: Mitglieder, Flyer, Galerien usw.
  // =====================

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img class="modal-content" alt="">
  `;
  document.body.appendChild(modal);

  const modalClose = modal.querySelector(".modal-close");
  const modalImg = modal.querySelector(".modal-content");

  const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";  // wieder scrollen erlauben
  };

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Öffnen des Modals durch Klick auf ein Bild
  document.querySelectorAll(
    ".hero-img img, .flyer img, .gallery img, .photo-item img, .year-card img, .flyer-images img"
  ).forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // ESC schließen
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });

  // =====================
  // 3. Startseite: optionaler Flyer‑Slider
  // (nur sichtbar, wenn mehr als 1 Flyer)
  // =====================

  const flyerImages = document.querySelector(".flyer-images");
  const flyerSlider = document.querySelector(".flyer-slider");
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");

  const scrollStep = 300;

  if (flyerImages && flyerSlider) {
    // Prüfen, ob 2+ Flyer vorhanden
    if (flyerImages.children.length > 1) {
      flyerSlider.classList.add("multi-flyers");
    }

    // Scroll‑Funktionen
    if (btnPrev && btnNext) {
      btnPrev.addEventListener("click", () => {
        flyerImages.scrollLeft -= scrollStep;
      });

      btnNext.addEventListener("click", () => {
        flyerImages.scrollLeft += scrollStep;
      });
    }
  }
});
