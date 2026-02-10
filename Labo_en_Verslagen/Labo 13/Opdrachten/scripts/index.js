// Setup functie: koppelt elke knop aan de juiste functie
const setup = () => {
    document.getElementById("btnOptellen").addEventListener("click", optellen);
    document.getElementById("btnAftrekken").addEventListener("click", aftrekken);
    document.getElementById("btnVermenigvuldigen").addEventListener("click", vermenigvuldigen);
    document.getElementById("btnDelen").addEventListener("click", delen);
}

// Functie voor optellen
const optellen = () => {
    let g1 = parseFloat(document.getElementById("txtLinks").value);
    let g2 = parseFloat(document.getElementById("txtRechts").value);
    document.getElementById("txtOutput").innerHTML = `${g1} + ${g2} = ${g1 + g2}`;
}

// Functie voor aftrekken
const aftrekken = () => {
    let g1 = parseFloat(document.getElementById("txtLinks").value);
    let g2 = parseFloat(document.getElementById("txtRechts").value);
    document.getElementById("txtOutput").innerHTML = `${g1} - ${g2} = ${g1 - g2}`;
}

// Functie voor vermenigvuldigen
const vermenigvuldigen = () => {
    let g1 = parseFloat(document.getElementById("txtLinks").value);
    let g2 = parseFloat(document.getElementById("txtRechts").value);
    document.getElementById("txtOutput").innerHTML = `${g1} x ${g2} = ${g1 * g2}`;
}

// Functie voor delen
const delen = () => {
    let g1 = parseFloat(document.getElementById("txtLinks").value);
    let g2 = parseFloat(document.getElementById("txtRechts").value);

    if (g2 === 0) {
        document.getElementById("txtOutput").innerHTML = "Fout: delen door 0 is niet mogelijk!";
        return;
    }

    document.getElementById("txtOutput").innerHTML = `${g1} : ${g2} = ${g1 / g2}`;
}

// Wacht tot de pagina geladen is voordat we de setup uitvoeren
window.addEventListener('load', setup);
