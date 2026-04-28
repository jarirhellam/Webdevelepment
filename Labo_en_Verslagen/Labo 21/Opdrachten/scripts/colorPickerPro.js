const setup = () => {
    const sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", update);
        sliders[i].addEventListener("change", update);
    }

    document.getElementById("btnSave").addEventListener("click", saveColor);
    document.getElementById("btnClear").addEventListener("click", clearAllColors);

    loadSavedColors();   // ← nieuw: laad opgeslagen kleuren bij starten
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
    const r = document.getElementById("sldrood").value;
    const g = document.getElementById("sldgroen").value;
    const b = document.getElementById("sldblauw").value;

    const colorKey = `color_${Date.now()}`;   // unieke key

    const colorData = {
        r: r,
        g: g,
        b: b
    };

    localStorage.setItem(colorKey, JSON.stringify(colorData));

    addColorToDOM(colorKey, r, g, b);
};

const addColorToDOM = (key, r, g, b) => {
    const divColors = document.getElementById("divColor");

    const obj = document.createElement("div");
    obj.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    obj.style.position = "relative";
    obj.style.width = "70px";
    obj.style.height = "70px";
    obj.style.display = "inline-block";
    obj.dataset.key = key;                    // om later te verwijderen

    obj.addEventListener("click", restoreColor);

    // delete button
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "x";
    btnDelete.style.position = "absolute";
    btnDelete.style.top = "2px";
    btnDelete.style.right = "2px";

    btnDelete.addEventListener("click", (event) => {
        event.stopPropagation();
        deleteColor(key, obj);
    });

    obj.appendChild(btnDelete);
    divColors.appendChild(obj);
};

const restoreColor = (event) => {
    const obj = event.currentTarget;
    const r = obj.style.backgroundColor.match(/\d+/g)[0];
    const g = obj.style.backgroundColor.match(/\d+/g)[1];
    const b = obj.style.backgroundColor.match(/\d+/g)[2];

    document.getElementById("sldrood").value = r;
    document.getElementById("sldgroen").value = g;
    document.getElementById("sldblauw").value = b;
    update();
};

const deleteColor = (key, element) => {
    localStorage.removeItem(key);
    element.remove();
};

const clearAllColors = () => {
    if (confirm("Weet je zeker dat je alle opgeslagen kleuren wilt verwijderen?")) {
        const divColors = document.getElementById("divColor");
        divColors.innerHTML = "";

        // verwijder alle keys die met "color_" beginnen
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith("color_")) {
                localStorage.removeItem(key);
            }
        });
    }
};

const loadSavedColors = () => {
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith("color_")) {
            const data = JSON.parse(localStorage.getItem(key));
            addColorToDOM(key, data.r, data.g, data.b);
        }
    });
};

window.addEventListener("load", setup);