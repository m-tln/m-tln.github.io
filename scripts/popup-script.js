setTimeout(function() {
    document.getElementById("popup").style.display = "block";
}, 30000);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".close-popup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
});