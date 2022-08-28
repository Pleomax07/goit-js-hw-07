import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Создание и рендер разметки по массиву данных
// galleryItems и предоставленному шаблону элемента галереи.

const gallery = document.querySelector(".gallery");
const imgMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionPosition: "bottom",
  captionsData: "alt",
  overlayOpacity: "1",
  doubleTapZoom: "2",
});

console.log(galleryItems);
