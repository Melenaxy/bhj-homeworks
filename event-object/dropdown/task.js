let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let items = Array.from(document.querySelectorAll('.dropdown__item'));

value.addEventListener('click', () => list.classList.toggle('dropdown__list_active'));
for (let item of items) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        value.textContent = item.textContent;
        list.classList.remove('dropdown__list_active');
    })
}