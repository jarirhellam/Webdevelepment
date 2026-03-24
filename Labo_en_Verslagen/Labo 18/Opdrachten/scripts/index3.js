const setup = () => {
    const p = document.getElementById("txtParagraaf");

    p.addEventListener("click", klik);
};

function klik() {
    this.style.color = "blue";
}

window.addEventListener("load", setup);