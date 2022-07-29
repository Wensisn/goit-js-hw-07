import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery')
const cardGallety = createGalleryItem(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend' ,cardGallety )

function createGalleryItem(galleryItems) {
    return galleryItems.map(({preview , original , description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>`
    })
    .join('')
}

let gallery = new SimpleLightbox('.gallery a');
