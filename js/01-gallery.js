import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
let markup = ``;
for (const image of galleryItems) {
  markup += `<div class='gallery__item'> <a href=${image.original} class='gallery__link'> <img  class='gallery__image'src=${image.preview} alt=${image.description} data-source=${image.original}> </a>
  </div>`;
}
galleryEl.innerHTML = markup;

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const closeModal = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`,
    {
      onShow: (instance) => {
        window.addEventListener("keyup", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keyup", closeModal);
      },
    }
  );
  instance.show();
});
