const elem = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight / 5) {
        elem.style.display = 'flex';
    } else {
        elem.style.display = 'none';
    }
});

