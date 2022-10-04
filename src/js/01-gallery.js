// Add imports above this lin
// Дополнительный импорт стилей
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);



const globalDiv = document.querySelector('.gallery');
for(let galleryItem of galleryItems){
    globalDiv.insertAdjacentHTML('beforeend',`<a class="gallery__link" onclick="return false" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-source="${galleryItem.original}"  alt="${galleryItem.description}" /></a>`);
    console.log(globalDiv);
}

new SimpleLightbox('.gallery a');

console.log(galleryItems);
