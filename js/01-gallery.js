import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map((galleryItem) => `
  <li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`)
  .join("");

gallery.insertAdjacentHTML('beforeend', markup);