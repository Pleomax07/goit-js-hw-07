import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onGalleryItemsClick);
const imgMarkup = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", imgMarkup);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

// 2. Реализация делегирования на div.gallery и получение url большого изображения.

function onGalleryItemsClick(event) {
  event.preventDefault(); // <--- 3. Запрет на перезагрузку страницы при клике по ссылке.
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  // 4. Открытие модального окна по клику на элементе галереи.

  const swatchUrlEl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img class="modal__image" src="${swatchUrlEl}"/>`
  );

  instance.show();

  // 5. Добавляем слушателя при нажатии ESC.
  window.addEventListener("keydown", onEscKeyPress);

  // 6. Закрытие модального окна при нажатии ESC.

  function onEscKeyPress(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}

console.log(galleryItems);
