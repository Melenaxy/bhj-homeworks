let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadCount = Number(dead.textContent);
let lostCount = Number(lost.textContent);

let holes = document.querySelectorAll('.hole');

for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', WhackAmole);
}

function WhackAmole(e) {
    let hole = e.target;
    if (hole.classList.contains('hole_has-mole')) {
        deadCount++;
        dead.textContent = `${deadCount}`;
        } else {
            lostCount++;
            lost.textContent = `${lostCount}`;
        };
    if (deadCount === 10) {
        endgame('Вы выиграли!')
    };
    if (lostCount === 5) {
        endgame('Вы проиграли!')
    };

    function endgame(message) {
        alert(message);
        deadCount = 0;
        lostCount = 0;
        dead.textContent = '0';
        lost.textContent = '0';
    }
}


