let spans = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;

setInterval(() => {
    spans[i].classList.remove('rotator__case_active');
    i++;
    if (i === spans.length) i = 0; 
    spans[i].classList.add('rotator__case_active');
    spans[i].style.color = spans[i].dataset.color;
}, 1000);
