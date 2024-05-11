const rainButton = document.querySelector(".rain__button");
const rain = document.querySelector(".rain");
rainButton.addEventListener('click', function () {
    if (rain.style.display === 'none') {
        rain.style.display = "block";
    } else {
        rain.style.display = "none";
    }
})