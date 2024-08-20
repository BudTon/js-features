const cookie = document.getElementById("cookie");
const counterDisplay = document.getElementById("clicker__counter");
const speedDisplay = document.getElementById("click__rate");
const maxSpeedDisplay = document.getElementById("maxclicker__rate");

let maxClickRate = 0;
let prevTimestamp = Date.now();

cookie.onclick = () => {
    cookie.width = ++counterDisplay.textContent % 2 ? 400 : 200;
    const elapsedTime = Date.now() - prevTimestamp;
    let clickRate = (1000 / elapsedTime).toFixed(2);
    speedDisplay.textContent = clickRate;
    maxClickRate = maxClickRate > clickRate ? maxClickRate : clickRate;
    maxSpeedDisplay.textContent = maxClickRate;
    prevTimestamp = Date.now();
};



// const img = document.getElementById("cookie");
// let clickerСounterСookie = 0;
// let clickRate = 0;
// let stopTime = 0;
// let maxClickRate = 0;

// clicker(stopTime)
// function clicker(stopTime) {
//     img.onclick = () => {

        // let startTime = new Date().getTime();
        // clickRate = clickerСounterСookie === 0 ? 0 : 1 / (Number(startTime) - Number(stopTime)) * 1000;
        // maxClickRate = maxClickRate > clickRate ? maxClickRate : clickRate
        // document.getElementById("click__rate").textContent = clickRate.toFixed(2)
        // document.getElementById("maxclicker__rate").textContent = maxClickRate.toFixed(2)
        // img.width += 200
        // clickerСounterСookie++
        // document.getElementById("clicker__counter").textContent = clickerСounterСookie

        // img.onclick = () => {
        //     img.width -= 200
        //     clickerСounterСookie++
        //     document.getElementById("clicker__counter").textContent = clickerСounterСookie
        //     stopTime = new Date().getTime();
        //     clickRate = 1 / (Number(stopTime) - Number(startTime)) * 1000;
        //     maxClickRate = maxClickRate > clickRate ? maxClickRate : clickRate
        //     document.getElementById("click__rate").textContent = clickRate.toFixed(2)
        //     document.getElementById("maxclicker__rate").textContent = maxClickRate.toFixed(2)
        //     return clicker(stopTime)
        // }



//     }
// }


