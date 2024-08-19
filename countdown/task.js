
const startTimer = document.getElementById("timer")
let runTimer = setInterval(() => {
    startTimer.textContent = Number(startTimer.textContent) - 1
    if (Number(startTimer.textContent) === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(runTimer)
    }
}, 1000);

// Повышенный уровень сложности #1(не обязательно)
// count значение таймера в МИНУТАХ
let count = 100;

function start() {
    let start_time = new Date();
    let stop_time = start_time.setMinutes(start_time.getMinutes() + count);
    let countdown = setInterval(function () {
        let now = new Date().getTime();
        let remain = stop_time - now;
        let hour = Math.floor((remain % (1000 * 60 * 60* 60)) / (1000 * 60 * 60));
        let min = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((remain % (1000 * 60)) / 1000);
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        document.getElementById("timer").innerHTML = hour + ":" + min + ":" + sec;

        // Повышенный уровень сложности #2(не обязательно)
        if (remain < 0) {
            clearInterval(countdown);
            // document.getElementById("timer").innerHTML = "Всё!";
            alert(location = "https://ya.ru")
        }
    }, 1000);
}

start()