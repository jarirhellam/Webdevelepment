const setup = () => {
    document.getElementById("toon")
        .addEventListener("click", toonResultaat);
};

const toonResultaat = () => {

    console.log("Is roker:", document.getElementById("roker").checked);

    let talen = document.getElementsByName("taal");
    let gekozen = "";

    for (let i = 0; i < talen.length; i++) {
        if (talen[i].checked) {
            gekozen = talen[i].value;
        }
    }

    console.log("Moedertaal:", gekozen);

    let buurland = document.getElementById("buurland");
    console.log("Buurland:", buurland.options[buurland.selectedIndex].text);

    let bestelling = document.getElementById("bestelling");

    console.log("Bestelling:");
    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected) {
            console.log("-", bestelling.options[i].text);
        }
    }
};

window.addEventListener("load", setup);