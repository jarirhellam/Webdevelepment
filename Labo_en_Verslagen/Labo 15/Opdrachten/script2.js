const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
    }

    update(); // initialiseren bij laden
};

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let waardes = document.getElementsByClassName("waarde");

    let r = sliders[0].value;
    let g = sliders[1].value;
    let b = sliders[2].value;

    // toon waarden naast sliders
    waardes[0].textContent = r;
    waardes[1].textContent = g;
    waardes[2].textContent = b;

    document.getElementById("colorBox").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

window.addEventListener("load", setup);