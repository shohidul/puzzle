var actualTime, aseconds = 0, aminutes = 0, ahours = 0, at;
var playTime = document.getElementById('playTime'),
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    playTime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}

function addActualTime() {
    aseconds++;
    if (aseconds >= 60) {
        aseconds = 0;
        aminutes++;
        if (aminutes >= 60) {
            aminutes = 0;
            ahours++;
        }
    }
    
    actualTime = (ahours ? (ahours > 9 ? ahours : "0" + ahours) : "00") + ":" + (aminutes ? (aminutes > 9 ? aminutes : "0" + aminutes) : "00") + ":" + (aseconds > 9 ? aseconds : "0" + aseconds);

    actualTimer(); console.log(actualTime);
}

function actualTimer() {
    at = setTimeout(addActualTime, 1000);
}


/* Start button */
start.onclick = timer;

/* Stop button */
pause.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    clearTime();
}

function clearTime(){
    clearTimeout(t);
    playTime.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    clearTimeout(at);
    actualTime = "00:00:00";
    aseconds = 0; aminutes = 0; ahours = 0;
}