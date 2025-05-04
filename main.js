let time = 0;
timerDisplay = document.getElementById("timer");
window.addEventListener("load", function () {
    setInterval(() => {
        time++;
        console.log(time);
        let seconds = time % 60;
        let minutes = Math.floor((time % 3600) / 60);
        let hour = Math.floor(time / 3600);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (hour>0){
            if (hour < 10) {
                hour = "0" + hour;
            }
            timerDisplay.innerHTML = `${hour}:${minutes}:${seconds}`;
        }
        else{
            timerDisplay.innerHTML = `${minutes}:${seconds}`;
        }
    }, 1000);
})