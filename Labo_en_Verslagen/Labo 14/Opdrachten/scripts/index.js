// Globale array (bestaat altijd)
let familie = ["Emma", "Lars", "Sophie", "Milan", "Noah"];

const setup = () => {
    document.getElementById("btnStart").addEventListener("click", voerOefeningUit);
};

const voerOefeningUit = () => {

    console.log("Aantal elementen in de array:", familie.length);

    console.log("Eerste element:", familie[0]);
    console.log("Derde element:", familie[2]);
    console.log("Vijfde element:", familie[4]);

    let nieuweNaam = prompt("Geef een extra naam in:");

    voegNaamToe(familie, nieuweNaam);

    console.log("Array na toevoegen nieuwe naam:", familie);

    let familieString = familie.toString();
    console.log("Array als string:", familieString);
};

const voegNaamToe = (array, naam) => {
    array.push(naam);
};

window.addEventListener("load", setup);
