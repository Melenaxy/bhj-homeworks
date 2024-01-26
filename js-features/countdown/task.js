let timer = document.getElementById('timer');

let countDown = function () {
    let start = Number(timer.textContent);
    if (start > 0) {
        start--;
        timer.textContent = `${start}`;
    } else {
        clearInterval(intervalID);
        alert('Вы победили в конкурсе!');
    }
}

let intervalID = setInterval(countDown, 1000);