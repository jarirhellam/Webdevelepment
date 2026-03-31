const initialize = () => {
    document.getElementById("btnOpnieuw").addEventListener("click", herstartTimer);
    setTimeout(timerTick, 1000);
};

const timerTick = () => {
    document.getElementById("output").innerHTML += " tick";
};

const herstartTimer = () => {
    setTimeout(timerTick, 1000);
};

window.addEventListener("load", initialize);