let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest;

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let result = JSON.parse(xhr.responseText).data;
        title.textContent = result.title;
        for (let answer of result.answers) {
            let button = document.createElement('button');
            button.classList.add('poll__answer');
            button.textContent = answer;
            button.addEventListener('click', (e) => {
                e.preventDefault();    
                alert('Спасибо, ваш голос засчитан!')
            });
            answers.append(button)
        }
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

