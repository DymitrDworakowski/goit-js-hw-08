// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this linenpm i simplelightbox
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const listImg = document.querySelector('ul.gallery');

function arr(items) {
    return items
    .map(({ preview, original, description }) => `
<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`)
    .join('');
}
const addImg = arr(galleryItems);

listImg.insertAdjacentHTML('beforeend', addImg);

const simpleLightbox = new SimpleLightbox('ul.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt"
});