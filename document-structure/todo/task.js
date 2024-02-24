let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');
let addBtn = document.getElementById('tasks__add');
let removeBtns = document.getElementsByClassName('task__remove');
let list = document.getElementById('tasks__list');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
});

addTask = () => {
    if (input.value.trim().length === 0) {
        return;
    };

    list.innerHTML += `<div class="task">
                <div class="task__title">
                    ${input.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`;
    input.value = '';
};

list.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();
    }
});



