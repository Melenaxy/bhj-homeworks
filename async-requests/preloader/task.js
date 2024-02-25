let loader = document.getElementById('loader');
let items = document.getElementById('items');
let xhr = new XMLHttpRequest;

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState ===xhr.DONE) {
        loader.classList.remove('loader_active');
        console.log(xhr.responseText);
        let result = JSON.parse(xhr.responseText).response.Valute;
        for (let key in result) {
            items.innerHTML += `<div class="item">
            <div class="item__code">
                    ${result[key].CharCode}
                </div>
                <div class="item__value">
                    ${result[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`
        }
    }
})
xhr.open( 'GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses' );
xhr.send();

