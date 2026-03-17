const setup = () => {
    document.getElementById("valideer")
        .addEventListener("click", valideer);
};

const isGetal = (tekst) => {
    return !isNaN(tekst);
};

const valideer = () => {

    let allesOk = true;

    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
        errors[i].previousElementSibling.classList.remove("fout");
    }

    // voornaam
    let voornaam = document.getElementById("voornaam");
    if (voornaam.value.length > 30) {
        toonFout(voornaam, "max 30 karakters");
        allesOk = false;
    }

    // familienaam
    let naam = document.getElementById("familienaam");
    if (naam.value.trim() === "") {
        toonFout(naam, "verplicht veld");
        allesOk = false;
    } else if (naam.value.length > 50) {
        toonFout(naam, "max 50 karakters");
        allesOk = false;
    }

    // geboortedatum
    let geb = document.getElementById("geboorte").value;

    if (geb.trim() === "") {
        toonFout(document.getElementById("geboorte"), "verplicht veld");
        allesOk = false;
    } else if (geb.length !== 10 || geb[4] !== '-' || geb[7] !== '-') {
        toonFout(document.getElementById("geboorte"), "formaat is niet jjjj-mm-dd");
        allesOk = false;
    }

    // email
    let email = document.getElementById("email").value;
    let parts = email.split("@");

    if (email.trim() === "") {
        toonFout(document.getElementById("email"), "verplicht veld");
        allesOk = false;
    } else if (parts.length !== 2 || parts[0] === "" || parts[1] === "") {
        toonFout(document.getElementById("email"), "geen geldig email adres");
        allesOk = false;
    }

    // kinderen
    let kinderen = document.getElementById("kinderen").value;

    if (!isGetal(kinderen) || kinderen < 0) {
        toonFout(document.getElementById("kinderen"), "is geen positief getal");
        allesOk = false;
    } else if (kinderen > 99) {
        toonFout(document.getElementById("kinderen"), "is te vruchtbaar");
        allesOk = false;
    }

    if (allesOk) {
        alert("Proficiat!");
    }
};

const toonFout = (input, boodschap) => {
    input.classList.add("fout");
    input.nextElementSibling.textContent = boodschap;
};

window.addEventListener("load", setup);