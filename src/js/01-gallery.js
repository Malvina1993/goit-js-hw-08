// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import "simplelightbox/dist/simple-lightbox.min.css";

import SimpleLightbox from "simplelightbox";

const ulEl = document.querySelector('ul.gallery');

galleryToList(galleryItems);

ulEl.addEventListener('click', onImageClick);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    sourceAttr: "href",
    captionPosition: "bottom",
    captionDelay: 250,

});



function onImageClick(evn) {
    
    if (evn.target.nodeName !== 'IMG') {
        return;
    };
    evn.preventDefault();
    

    gallery.sourceAttr = evn.target.parentNode.getAttribute("href");
   
};

function galleryToList(gallery) {
    ulEl.innerHTML = gallery
        .map(({ preview, original, description }) => `
            <li class = "gallery__item">
                <a class = "gallery__link" href = "${original}">
                    <img class = "gallery__image" src = "${preview}" alt = "${description}" >
                </a>
            </li>
            `)
        .join("");
 
};



console.log(galleryItems);
