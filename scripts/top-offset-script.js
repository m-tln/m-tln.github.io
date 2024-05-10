const elem = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        elem.classList.add('fixed');
        console.log("dafds")
    } else {
        elem.classList.remove('fixed');
    }
});

