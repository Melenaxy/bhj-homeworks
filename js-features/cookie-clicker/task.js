let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let clickerSpeed = document.getElementById('clicker__speed');

let clickNumber = Number(counter.textContent);
let clickFirst = 0;

cookie.onclick = function clickerCounter() {
    clickNumber++;
    counter.textContent = `${clickNumber}`;
    cookie.width === 200 ? cookie.width = 230 : cookie.width = 200;
    if (clickFirst === 0) {
        clickFirst = new Date();
    };
    let clickNext = new Date();
    let diff = (clickNext - clickFirst) / 1000;
    clickFirst = clickNext;
    clickerSpeed.textContent = `${diff}`;
}