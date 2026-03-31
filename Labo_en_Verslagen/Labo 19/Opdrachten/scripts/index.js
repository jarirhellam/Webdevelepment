let timerId = 0;

const initialize = () => {
    document.getElementById("btnStop").addEventListener("click", stopTimer);
    timerId = setInterval(timerTick, 1000);
};

const timerTick = () => {
    document.getElementById("output").innerHTML += " tick";
};

const stopTimer = () => {
    clearInterval(timerId);
};

window.addEventListener("load", initialize);