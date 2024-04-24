let tickClock = document.getElementById("tick-clock");
let st = document.getElementById("start");
let stp = document.getElementById("stop");
let savedTime = {hour: 0, minute: 0, second: 0};

function start() {
    stp.style.display = "inline";
    st.style.display = "none";
    let { hour, minute, second } = savedTime;
    interval = setInterval(function () {
        second++;
        if (second >= 60) {
            second = 0;
            minute++;
            if (minute >= 60) {
                minute = 0;
                hour++;
                if (hour >= 24) {
                    hour = 0;
                }
            }
        }

        // Pad single-digit values with leading zeros
        let display = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
        tickClock.textContent = display;
        savedTime = { hour, minute, second };
    }, 1000);
}


const stop = function(){
    st.style.display = "inline";
    stp.style.display = "none"
    clearInterval(interval)
}

const reset = function(){
    stop()
    savedTime = {hour:0,minute:0,second:0}
    let {hour,minute,second} = savedTime  
    tickClock.textContent = "00:00:00"
}