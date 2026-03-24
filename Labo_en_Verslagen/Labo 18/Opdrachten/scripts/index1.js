const setup = () => {
    const paragrafen = document.querySelectorAll(".text");

    paragrafen.forEach(p => {
        p.addEventListener("click", (event) => {
            event.target.style.color = "red";
        });
    });
};

window.addEventListener("load", setup);