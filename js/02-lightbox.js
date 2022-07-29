import { galleryItems } from './gallery-items.js';
// Change code below this line

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

console.log(galleryItems);

  let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});
