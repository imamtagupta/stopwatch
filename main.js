let time = 0;
timerDisplay = document.getElementById("timer");
window.addEventListener("load", function () {
    setInterval(() => {
        time++;
        console.log(time);
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        let hour = Math.floor(minutes / 60);
        if (hour>1){
            timerDisplay.innerHTML = `${hour}:${minutes}:${seconds}`;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        timerDisplay.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
})