let divs = Array.from(document.querySelectorAll('.reveal'));
let body = document.querySelector('body');

document.addEventListener('scroll', () => {
    for (let div of divs) {
        let { top, bottom } = div.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) {
            div.classList.add('reveal_active');
        }
    }
})