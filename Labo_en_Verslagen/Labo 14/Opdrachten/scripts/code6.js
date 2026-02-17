const setup = () => {
    let btn = document.getElementById("btnToon");
    btn.addEventListener("click", toonSubstring);
}

const toonSubstring = () => {
    let tekst = document.getElementById("txtString").value;
    let start = parseInt(document.getElementById("txtStart").value);
    let end = parseInt(document.getElementById("txtEnd").value);

    document.getElementById("txtOutput").innerHTML = tekst.substring(start, end);
}

window.addEventListener("load", setup);
