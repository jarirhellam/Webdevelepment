let personen = [];
let huidigeIndex = -1;

// NIEUW
function nieuwPersoon() {
    huidigeIndex = -1;

    document.getElementById("voornaam").value = "";
    document.getElementById("familienaam").value = "";
    document.getElementById("geboortedatum").value = "";
    document.getElementById("email").value = "";
    document.getElementById("kinderen").value = "";
}

// BEWAREN
function bewaarPersoon() {
    let persoon = {
        voornaam: document.getElementById("voornaam").value,
        familienaam: document.getElementById("familienaam").value,
        geboorteDatum: document.getElementById("geboortedatum").value,
        email: document.getElementById("email").value,
        kinderen: document.getElementById("kinderen").value
    };

    if (huidigeIndex === -1) {
        personen.push(persoon);
    } else {
        personen[huidigeIndex] = persoon;
    }

    updateLijst();
}

// LIJST UPDATEN
function updateLijst() {
    let lijst = document.getElementById("personenLijst");
    lijst.innerHTML = "";

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i;

        lijst.appendChild(option);
    }
}

// SELECT
document.getElementById("personenLijst").addEventListener("change", function () {
    huidigeIndex = this.value;

    let p = personen[huidigeIndex];

    document.getElementById("voornaam").value = p.voornaam;
    document.getElementById("familienaam").value = p.familienaam;
    document.getElementById("geboortedatum").value = p.geboorteDatum;
    document.getElementById("email").value = p.email;
    document.getElementById("kinderen").value = p.kinderen;
});