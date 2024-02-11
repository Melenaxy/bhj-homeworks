let book = document.getElementById('book');
let fonts = Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size'));
let textColors = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));
let bgColors = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'));


for (let font of fonts) {
    font.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        fonts.forEach(i => i.classList.remove('font-size_active'));
        target.classList.add('font-size_active');
        
        if (target.dataset.size === 'small') {
            book.classList.remove('book_fs-big')
            book.classList.add('font-size_small')
        } else if (target.dataset.size === 'big') {
            book.classList.remove('font-size_small')
            book.classList.add('book_fs-big')
        } else {
            book.classList.remove('book_fs-big')
            book.classList.remove('font-size_small')
        }
    })
}

for (let color of textColors) {
    color.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        textColors.forEach(i => i.classList.remove('color_active'));
        target.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        book.classList.add(`book_color-${target.dataset.textColor}`);
    })
}

for (let bgColor of bgColors) {
    bgColor.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        bgColors.forEach(i => i.classList.remove('color_active'));
        target.classList.add('color_active');

        book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
        book.classList.add(`book_bg-${target.dataset.bgColor}`);
    })
}