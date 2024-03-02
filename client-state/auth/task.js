let form = document.getElementById('signin__form');
let signin = document.getElementById('signin');
let welcomeMessage = document.getElementById('welcome');
let id = document.getElementById('user_id');
let xhr = new XMLHttpRequest();

window.addEventListener('load', () => {
    if (!localStorage.user_id) {
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active');
    } else {
        id.textContent = localStorage.user_id;
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
});

xhr.addEventListener('load', () => {
    try {
        let result = JSON.parse(xhr.response);
        if (result.success) {
            localStorage.user_id = result.user_id;
            id.textContent = result.user_id;
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
        } else {
            alert('Неверный логин/пароль');
        };
    } catch (error) {
        console.log(error);
    }
})
