localStorage.setItem('flag', 'true')

setTimeout(function() {
    if (localStorage.getItem('flag') === 'true') {
        document.getElementById("popup").style.display = "block";
    }
}, 30000);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close-popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
        localStorage.setItem('flag', 'false')
    });
});