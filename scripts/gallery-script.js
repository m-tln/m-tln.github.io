let images = document.querySelectorAll('.section__image');
let gallery = document.querySelector('.gallery');
let galleryImg = document.querySelector('.gallery__image');
let leftArrow = document.querySelector('.gallery__arrow_left');
let rightArrow = document.querySelector('.gallery__arrow_right');
let currentIndex = 0;


function updateGallery() {
    galleryImg.src = images[currentIndex].src;
    updateButtons();
}

function openGallery() {
    gallery.style.display = 'flex';
    updateGallery()
}

function updateButtons() {
    leftArrow.style.display = currentIndex === 0 ? 'none' : '';
    rightArrow.style.display = currentIndex === images.length - 1 ? 'none' : '';
}

gallery.addEventListener('click', (event) => {
    if (!event.target.closest('.gallery__image') &&
        !event.target.closest('.gallery__arrow_left') &&
        !event.target.closest('.gallery__arrow_right') &&
        gallery.style.display === 'flex') {
        gallery.style.display = 'none';
    }
});


images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        openGallery();
    });
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

rightArrow.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        galleryImg.src = images[currentIndex].src;
        updateGallery();
    }
});
