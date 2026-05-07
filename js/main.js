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
  // 2. Bild‑Modal für alle `.hero-img img`, `.flyer img`, `.gallery img`, `.photo-item img`
  // =====================

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <span class="modal-close">&times;</span>
    <img class="modal-content" alt="">
  `;
  document.body.appendChild(modal);

  const closeModal = () => {
    modal.style.display = "none";
  };

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  const imageTriggers = document.querySelectorAll(
    ".hero-img img, .flyer img, .gallery img, .photo-item img, .year-card img"
  );

  imageTriggers.forEach((img) => {
    img.addEventListener("click", function () {
      // Modal öffnen
      const modalImg = modal.querySelector(".modal-content");
      modalImg.src = this.src;
      modalImg.alt = this.alt;

      modal.style.display = "flex";

      // Body sperren für kleinere SSH (nicht zwingend nötig, aber hübsch)
      document.body.style.overflow = "hidden";

      // Später, wenn du willst: Captions einfügen
      // Beispiel:
      // const caption = modal.querySelector(".modal-caption");
      // caption.textContent = this.alt;
    });
  });

  // Escape‑Taste schließt Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
