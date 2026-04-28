const setup = () => {
    document.getElementById("btnSave").addEventListener("click", saveSettings);
    document.getElementById("btnShow").addEventListener("click", showSettings);
};

const saveSettings = () => {
    let settings = {
        age: parseInt(document.getElementById("txtAge").value) || 0,
        weight: parseInt(document.getElementById("txtWeight").value) || 0,
        budget: parseInt(document.getElementById("txtBudget").value) || 0
    };

    let settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsPerson", settingsJSON);

    alert("Settings succesvol opgeslagen in localStorage!");
};

const showSettings = () => {
    let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson");

    let settings = {
        age: 0,
        weight: 0,
        budget: 0
    };

    if (settingsJSON) {
        settings = JSON.parse(settingsJSON);
    }

    document.getElementById("txtAge").value = settings.age;
    document.getElementById("txtWeight").value = settings.weight;
    document.getElementById("txtBudget").value = settings.budget;
};

window.addEventListener("load", setup);