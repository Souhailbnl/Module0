'use strict';

// Haal de thema-knop op
const themaKnop = document.getElementById("themaKnop");

// Functie om het thema te wisselen
themaKnop.addEventListener("click", function() {
    // Controleer of de pagina al het donkere thema heeft
    if (document.body.classList.contains("dark-theme")) {
        // Verander naar licht thema
        document.body.classList.remove("dark-theme");
        document.body.style.backgroundColor = "#ffffff";  // Achtergrondkleur licht
        document.body.style.color = "#000000";  // Tekstkleur zwart
        document.querySelectorAll('a').forEach(link => {
            link.style.color = "#1a0dab";  // Kleur van links
        });
        themaKnop.innerText = "Donker thema";  // Knoptekst aanpassen
    } else {
        // Verander naar donker thema
        document.body.classList.add("dark-theme");
        document.body.style.backgroundColor = "#333333";  // Achtergrondkleur donker
        document.body.style.color = "#ffffff";  // Tekstkleur wit
        document.querySelectorAll('a').forEach(link => {
            link.style.color = "#ff6347";  // Kleur van links
        });
        themaKnop.innerText = "Licht thema";  // Knoptekst aanpassen
    }
});