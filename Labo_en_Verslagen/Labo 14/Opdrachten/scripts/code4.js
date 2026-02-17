const setup = () => {
    let btn = document.getElementById("btnWijzig");
    btn.addEventListener("click", wijzigTekst);
}

const wijzigTekst = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

window.addEventListener("load", setup);
