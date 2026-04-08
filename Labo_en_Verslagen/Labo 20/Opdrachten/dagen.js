// 1. Maak een Date object voor je geboortedag (voorbeeld: 17 december 2005)
let geboortedag = new Date(2005, 05, 15); // maand is 0-indexed, 11 = december

// 2. Huidige datum ophalen
let vandaag = new Date();

// 3. Bereken het verschil in milliseconden
let verschilMs = vandaag - geboortedag; // Date objecten kunnen worden afgetrokken

// 4. Zet milliseconden om naar dagen
let verschilDagen = Math.floor(verschilMs / (1000 * 60 * 60 * 24));

console.log("Aantal dagen sinds geboortedag:", verschilDagen);