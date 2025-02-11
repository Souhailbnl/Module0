'use strict';

// Functie voor het berekenen van de som
document.getElementById("bereken").addEventListener("click", function() {
    // Haal de waarden op van de invoervelden
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let resultaatElement = document.getElementById("resultaat");

    // Controleer of de ingevoerde waarden nummers zijn
    if (isNaN(getal1) || isNaN(getal2) || getal1 === "" || getal2 === "") {
        resultaatElement.innerText = "Voer geldige getallen in!";
    } else {
        // Zet de waarden om naar nummers en voeg ze toe
        getal1 = parseFloat(getal1);
        getal2 = parseFloat(getal2);
        let resultaat = getal1 + getal2;

        // Toon het resultaat
        resultaatElement.innerText = "Het resultaat is: " + resultaat;
    }
});