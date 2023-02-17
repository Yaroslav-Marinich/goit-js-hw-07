import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const container = document.querySelector(".gallery");
const galleryList = [];

galleryItems.map(({ preview, original, description }) => {
  const galleryEl = `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  galleryList.push(galleryEl);
});
container.insertAdjacentHTML("beforeend", galleryList.join(""));

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.
// 3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
container.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}">
`);

    instance.show();
    
    container.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
});
