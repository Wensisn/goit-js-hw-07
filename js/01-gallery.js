import { galleryItems } from './gallery-items.js';



const galleryContainer = document.querySelector('.gallery')
const cardGallety = createGalleryItem(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend' ,cardGallety )

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview , original , description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original.value}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    })
    .join('')
}

const onGalleryContainerClick = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("gallery")) return;
    const source = e.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);


  instance.show();
}

galleryContainer.addEventListener("click", onGalleryContainerClick);
