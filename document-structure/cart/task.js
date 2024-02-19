let decButtons = document.querySelectorAll('.product__quantity-control_dec');
let incButtons = document.querySelectorAll('.product__quantity-control_inc');
let addButtons = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');

for (let decBtn of decButtons) {
    decBtn.addEventListener('click', (e) => {
        if (decBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent > 0) {
            decBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent--
        }
    })
};

for (let incBtn of incButtons) {
    incBtn.addEventListener('click', (e) => {
        incBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent++;
    })
};

for (let addBtn of addButtons) {
    addBtn.addEventListener('click', (e) => {
        let product = addBtn.closest('.product');
        let id = product.dataset.id;
        let src = product.querySelector('img').src;
        let quantity = Number(product.querySelector('.product__quantity-value').textContent);

        for (let item of cart.children) {
            if (item.dataset.id === id) {
                item.querySelector('.cart__product-count').textContent = Number(item.querySelector('.cart__product-count').textContent) + Number(quantity);
                return;
            }           
        } 

        cart.innerHTML += `<div class="cart__product" data-id=${id}>
        <img class="cart__product-image" src=${src}>
        <div class="cart__product-count">${quantity}</div>
    </div>`
    })
}


