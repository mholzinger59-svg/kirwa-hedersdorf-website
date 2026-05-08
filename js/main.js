document.addEventListener("DOMContentLoaded", function () {

  // =====================
  // 1. Burger‑Menü
  // =====================

  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });
  }

  // =====================
  // 2. Bild‑Modal für alle `.hero-img img`, `.flyer img`, `.gallery img`, `.photo-item img`, `.year-card img`
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
    document.body.style.overflow = "";     // wichtig: wieder Unlock
    document.body.style.position = "";     // wieder normales Layout
  };

  // Schließen via X oder Klick auf Hintergrund
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Bild‑Trigger: alle relevanten Bilder
  const imageTriggers = document.querySelectorAll(
    ".hero-img img, .flyer img, .gallery img, .photo-item img, .year-card img"
  );

  imageTriggers.forEach((img) => {
    img.addEventListener("click", function () {
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      modal.style.display = "flex";

      // Body‑Scrolling kurz aus für bessere UX
      // Aber ohne „overflow: hidden; position: fixed;“, das macht dein Problem
      document.body.style.overflow = "hidden";
    });
  });

  // Escape‑Taste schließt Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
