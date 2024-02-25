let progress = document.getElementById('progress');
let form = document.getElementById('form')
let formData = new FormData(form);
let xhr = new XMLHttpRequest;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});

xhr.upload.onprogress = (e) => {
    progress.value = e.loaded / e.total;
    console.log(e);
};
