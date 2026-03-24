const setup = () => {
    document.querySelector("ul").addEventListener("click", () => {
        console.log("UL geklikt");
    });

    document.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", () => {
            console.log("LI geklikt");
        });
    });

    document.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", (event) => {
            console.log("A geklikt");
            event.preventDefault();
        });
    });
};

window.addEventListener("load", setup);