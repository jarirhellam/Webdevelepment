const setup = () => {
    let knoppen = document.getElementsByClassName("kleurKnop");

    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", veranderKleur);
    }
};

const veranderKleur = (event) => {
    let knop = event.target;
    let kleur = knop.dataset.kleur;

    knop.classList.toggle(kleur);
};

window.addEventListener("load", setup);