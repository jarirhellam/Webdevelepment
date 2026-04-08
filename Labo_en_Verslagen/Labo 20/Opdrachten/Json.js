// 1. Object maken
let student1 = {
    voornaam: "Jan",
    familienaam: "Janssens",
    geboorteDatum: new Date("1993-12-31"),
    adres: {
        gemeente: "Kortrijk"
    },
    isIngeschreven: true
};

// 2. Omzetten naar JSON
let jsonString = JSON.stringify(student1);

// 3. Tonen in console
console.log("JSON string:");
console.log(jsonString);