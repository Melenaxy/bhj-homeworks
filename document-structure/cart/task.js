let decButtons = document.querySelectorAll('.product__quantity-control_dec');
let incButtons = document.querySelectorAll('.product__quantity-control_inc');
let addButtons = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');

for (let decBtn of decButtons) {
    decBtn.addEventListener('click', (e) => {
        if (decBtn.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent > 1) {
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
        let cartProducts = Array.from(document.querySelectorAll('.cart__product'));
        let product = addBtn.closest('.product');
        let id = product.dataset.id;
        let src = product.querySelector('img').src;
        let quantity = Number(product.querySelector('.product__quantity-value').textContent);

        let productInCart = cartProducts.find(product => product.dataset.id === id);
        if (productInCart) {
            productInCart.querySelector('.cart__product-count').textContent = Number(productInCart.querySelector('.cart__product-count').textContent) + Number(quantity);
        } else {
            cart.innerHTML += `<div class="cart__product" data-id=${id}>
            <img class="cart__product-image" src=${src}>
            <div class="cart__product-count">${quantity}</div>
        </div>`
        }
    })
}


