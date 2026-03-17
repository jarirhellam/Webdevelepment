const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";

    let woorden = zin.split(" ");

    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i] === "de") {
            resultaat += "het ";
        } else {
            resultaat += woorden[i] + " ";
        }
    }

    console.log(resultaat.trim());
};

window.addEventListener("load", setup);