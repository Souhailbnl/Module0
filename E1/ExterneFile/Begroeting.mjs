document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Begroeting").addEventListener("click", function() {
        this.innerText = this.innerText === "Hallo!" ? "Tot ziens!" : "Hallo!";
    });
});