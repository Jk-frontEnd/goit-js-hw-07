import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsMarkup = galleryItems
  .map((item) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`;
  })
  .join("");

const galleryElem = document.querySelector("ul.gallery");

galleryElem.innerHTML = galleryItemsMarkup;
galleryElem.addEventListener("click", selectItem);

function selectItem(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}