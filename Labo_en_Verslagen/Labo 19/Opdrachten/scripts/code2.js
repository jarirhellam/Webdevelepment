let global = {
    AANTAL_AFBEELDINGEN: 12,
    AANTAL_KAARTEN_PER_AFBEELDING: 2,
    AANTAL_KAARTEN_HORIZONTAAL: 6,
    PREFIX_KAART_PATH: "images/kaart",
    SUFFIX_KAART_PATH: ".png",
    ACHTERKANT_PATH: "images/achterkant.png",
};

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
};

const toonGoed = () => {
    document.getElementById("goed").play();
    let kaarten = document.getElementsByClassName("voorkant");
    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].className += " goed";
    }
};

const toonFout = () => {
    document.getElementById("fout").play();
    let kaarten = document.getElementsByClassName("voorkant");
    for (let i = 0; i < kaarten.length; i++) {
        kaarten[i].className += " fout";
    }
};

const draaiKaartenMetVoorkantNaarAchterkant = () => {
    let kaarten = document.getElementsByClassName("voorkant");
    // LIVE collection: gebruik while i.p.v. for, anders sla je er over!
    while (kaarten.length > 0) {
        kaarten[0].setAttribute("src", global.ACHTERKANT_PATH);
        kaarten[0].className = "kaart achterkant";
    }
    document.getElementById("playField").className = "";
};

const verwijderKaartenMetVoorkant = () => {
    let kaarten = document.getElementsByClassName("voorkant");
    // LIVE collection: gebruik while i.p.v. for!
    while (kaarten.length > 0) {
        let kaart = kaarten[0];
        kaart.removeEventListener("click", klikOpKaart);
        kaart.parentNode.removeChild(kaart);
    }
    document.getElementById("playField").className = "";
    controleerSpelGedaan();
};

const controleerSpelGedaan = () => {
    let kaarten = document.getElementsByClassName("kaart");
    if (kaarten.length === 0) {
        let playField = document.getElementById("playField");
        let savedHeight = playField.clientHeight;
        playField.innerHTML = "";
        playField.style.height = savedHeight + "px";
        playField.className = "klaar";
    }
};

const controleerOpOvereenkomst = (kaarten) => {
    let allenGelijk = true;
    for (let i = 1; i < kaarten.length; i++) {
        if (kaarten[0].getAttribute("src") !== kaarten[i].getAttribute("src")) {
            allenGelijk = false;
            break;
        }
    }
    if (allenGelijk) {
        setTimeout(toonGoed, 500);
        setTimeout(verwijderKaartenMetVoorkant, 1000);
    } else {
        setTimeout(toonFout, 500);
        setTimeout(draaiKaartenMetVoorkantNaarAchterkant, 1000);
    }
};

const klikOpKaart = (e) => {
    // blokkeer kliks tijdens wachttijd
    if (document.getElementById("playField").className === "geblokkeerd") return;

    let kaart = e.target;
    document.getElementById("draai").play();
    kaart.className = "kaart voorkant";
    kaart.setAttribute("src", kaart.getAttribute("data-imageSource"));

    let kaartenMetVoorkant = document.getElementsByClassName("voorkant");
    // LIVE collection: na het omdraaien zit onze kaart er al in, dus test op ==2
    if (kaartenMetVoorkant.length === global.AANTAL_KAARTEN_PER_AFBEELDING) {
        controleerOpOvereenkomst(kaartenMetVoorkant);
        document.getElementById("playField").className = "geblokkeerd";
    }
};

const addVak = (parent, kaartNummer) => {
    let vak = document.createElement("span");
    let kaart = document.createElement("img");

    kaart.className = "kaart achterkant";
    kaart.setAttribute("src", global.ACHTERKANT_PATH);
    kaart.setAttribute("data-imageSource", global.PREFIX_KAART_PATH + kaartNummer + global.SUFFIX_KAART_PATH);
    kaart.addEventListener("click", klikOpKaart);

    vak.className = "vak";
    vak.appendChild(kaart);
    parent.appendChild(vak);
};

const initialize = () => {
    let playField = document.getElementById("playField");
    let aantalKaarten = global.AANTAL_AFBEELDINGEN * global.AANTAL_KAARTEN_PER_AFBEELDING;

    // bouw array met elk kaartnummer twee keer
    let kaartNummers = [];
    for (let i = 0; i < aantalKaarten; i++) {
        kaartNummers.push(i % global.AANTAL_AFBEELDINGEN);
    }

    shuffle(kaartNummers);

    for (let i = 0; i < aantalKaarten; i++) {
        // linebreak aan begin van elke nieuwe rij (niet de eerste)
        if (i % global.AANTAL_KAARTEN_HORIZONTAAL === 0 && i !== 0) {
            playField.appendChild(document.createElement("br"));
        }
        addVak(playField, kaartNummers[i]);
    }
};

window.addEventListener("load", initialize);