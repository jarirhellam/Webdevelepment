const setup = () => {
    const p = document.getElementById("abc");

    console.log(p.childNodes); // toont alle nodes
    console.log(p.children);   // enkel elementen

    // voorbeeld: tekst aanpassen
    p.firstChild.nodeValue = "Aangepaste tekst ";
};

window.addEventListener("load", setup);