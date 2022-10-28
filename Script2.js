// JavaScript source code
let ONOFFVAR = false;
let thelight = document.getElementById("light");
let BOB = document.getElementById("bob");



function onoff() {
    (ONOFFVAR === false) ? on() : off();
    console.log(onoff);
}
function on() {
    thelight.style.backgroundColor = 'yellow';
    ONOFFVAR = true;
    BOB.innerHTML = "TURN OFF";
}
function off() {
    thelight.style.backgroundColor = 'grey';
    ONOFFVAR = false;
    BOB.innerHTML = "TURN ON";
}