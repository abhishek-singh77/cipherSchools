let hours = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let mili = document.getElementById("mili");

var hour = 00;
var minute = 00;
var second = 00;
var millisecond = 00;
var interval;

window.onload = () => clearFields();

function start() {
    clearInterval(interval); 
    interval = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    clearFields();
}

function startTimer() {
    millisecond++;
    if(millisecond < 9) {
        mili.innerText = "0" + millisecond;
    }
    if(millisecond > 99) {
        second++;
        sec.innerText = "0" + second;
        millisecond = 0;
        mili.innerText = "0" + millisecond;
    }
    if(second > 60) {
        minute++;
        min.innerText = "0" + minute;
        second = 0;
        sec.innerText = "0" + second;
    }

    if(millisecond > 9) {
        mili.innerText = millisecond;
    }
    if (second > 9){
        sec.innerText = second;
    }
    if (minute > 9){
        min.innerText = minute;
    }
    if(hour > 9) {
        hours.innerText = hour;
    }
}

function clearFields() {
    hours.innerText = "00";
    min.innerText = "00";
    sec.innerText = "00";
    mili.innerText = "00";
}