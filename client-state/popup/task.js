let subscribe = document.getElementById('subscribe-modal');
let modalClose = subscribe.querySelector('.modal__close');
if (modalClose) {
    modalClose.addEventListener('click', addCookie)
};


window.addEventListener('load', () => {
    let getCookie = (name) => {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts
                .pop()
                .split(";")
                .shift();
        };
    };

    let status = getCookie("subscribe");
    if (status !== 'close') {
        subscribe.classList.add('modal_active');
    } else {
        subscribe.classList.remove('modal_active');
    };
});

function addCookie() {
    console.log(document.cookie);
    subscribe.classList.remove('modal_active');
    document.cookie = 'subscribe=close';
    console.log(document.cookie);
};
