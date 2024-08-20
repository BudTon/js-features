arrHole = []
let dead = 1;
let lost = 1;

for (let index = 1; index <= 9; index++) {
    arrHole[index] = document.getElementById(`hole${index}`)
}

arrHole.forEach(hole => {
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            document.getElementById("dead").textContent = dead++;
        } else {
            document.getElementById("lost").textContent = lost++;
        }
        if (dead === 10) {
            alert('Вы ПОБЕДИЛИ!!!');
            window.location.reload();
        }
        if (lost === 5) {
            alert('Вы проиграли!!!');
            window.location.reload();
        }
    }
});



// for (let index = 1; index <= 9; index++) {
//     arrHole[index].onclick = () => {
//         if (arrHole[index].className.includes('hole_has-mole')) {
//             document.getElementById("dead").textContent = dead++;
//         } else {
//             document.getElementById("lost").textContent = lost++;
//         }
//         if (dead === 10) {
//             alert('Вы ПОБЕДИЛИ!!!');
//             window.location.reload();
//         }
//         if (lost === 5) {
//             alert('Вы проиграли!!!');
//             window.location.reload();
//         }
//     }
// }