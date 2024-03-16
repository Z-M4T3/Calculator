let displayCalc = null;

function addCalc(btn) {

    if (displayCalc == null) {
        displayCalc = btn;
    } else {
        displayCalc += btn;
    }
    updateCalc();
}

function clearCalc() {
    displayCalc = null;
    updateCalc();
}

function calc() {
    try {
        displayCalc = eval(displayCalc);
        updateCalc();
    } catch {
        displayCalc = "Error";
        updateCalc();
        displayCalc = null;
    }
}

function updateCalc() {
    document.getElementById('calc-nums').textContent = displayCalc;
}