const setup = () => {
    let gemeenten = [];

    while (true) {
        let invoer = prompt("Geef een gemeente (stop om te stoppen)");

        if (invoer === null || invoer === "stop") {
            break;
        }

        gemeenten.push(invoer);
    }

    gemeenten.sort((a, b) => a.localeCompare(b));

    let select = document.createElement("select");

    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement("option");
        option.textContent = gemeenten[i];
        select.appendChild(option);
    }

    document.body.appendChild(select);
};

window.addEventListener("load", setup);