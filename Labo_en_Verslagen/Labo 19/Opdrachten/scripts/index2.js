let timerId = 0;

const initialize = () => {
    document.getElementById("btnStop").addEventListener("click", stopTimer);
    timerId = setTimeout(timerTick, 1000);
};

const timerTick = () => {
    document.getElementById("output").innerHTML += " tick";
    timerId = setTimeout(timerTick, 1000); // plant zichzelf opnieuw
};

const stopTimer = () => {
    clearTimeout(timerId);
};

window.addEventListener("load", initialize);