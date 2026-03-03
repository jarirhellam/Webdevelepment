const setup = () => {
    document.getElementById("herbereken")
        .addEventListener("click", herbereken);
};

const herbereken = () => {

    let prijzen = document.getElementsByClassName("prijs");
    let btwPercentages = document.getElementsByClassName("btw");
    let aantallen = document.getElementsByClassName("aantal");
    let subtotaleCellen = document.getElementsByClassName("subtotaal");

    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {

        let prijs = parseFloat(prijzen[i].textContent);
        let btw = parseFloat(btwPercentages[i].textContent);
        let aantal = parseInt(aantallen[i].value);

        let subtotaal = prijs * aantal * (1 + btw / 100);

        subtotaleCellen[i].textContent = subtotaal.toFixed(2);

        totaal += subtotaal;
    }

    document.getElementById("totaal").textContent = totaal.toFixed(2);
};

window.addEventListener("load", setup);