const setup = () => {
    const sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    document.getElementById("btnSave").addEventListener("click", saveColor);

    update();
};

const update = () => {
    const valueRed = document.getElementById("sldrood").value;
    const valueGreen = document.getElementById("sldgroen").value;
    const valueBlue = document.getElementById("sldblauw").value;

    document.getElementById("rood").innerHTML = valueRed;
    document.getElementById("groen").innerHTML = valueGreen;
    document.getElementById("blauw").innerHTML = valueBlue;

    const swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
};

const saveColor = () => {
    const valueRed = document.getElementById("sldrood").value;
    const valueGreen = document.getElementById("sldgroen").value;
    const valueBlue = document.getElementById("sldblauw").value;

    const divColors = document.getElementById("divColor");

    const obj = document.createElement("div");
    obj.style.backgroundColor = `rgb(${valueRed}, ${valueGreen}, ${valueBlue})`;
    obj.style.position = "relative";
    obj.style.width = "70px";
    obj.style.height = "70px";
    obj.style.margin = "5px";
    obj.style.display = "inline-block";

    // Sla RGB op als data-attributen zodat restoreColor ze kan ophalen
    obj.setAttribute("data-r", valueRed);
    obj.setAttribute("data-g", valueGreen);
    obj.setAttribute("data-b", valueBlue);

    obj.addEventListener("click", restoreColor);

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "x";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "2px";
    btnDelete.style.right = "2px";

    btnDelete.addEventListener("click", (event) => {
        event.stopPropagation(); // anders triggert de klik ook restoreColor!
        event.currentTarget.parentElement.remove();
    });

    divColors.appendChild(obj);
    obj.appendChild(btnDelete);
};

const restoreColor = (event) => {
    const swatch = event.currentTarget;

    document.getElementById("sldrood").value = swatch.getAttribute("data-r");
    document.getElementById("sldgroen").value = swatch.getAttribute("data-g");
    document.getElementById("sldblauw").value = swatch.getAttribute("data-b");

    update();
};

window.addEventListener("load", setup);