const btnHamburguer = document.querySelector('#menu-hamburger');
btnHamburguer.addEventListener('click', () => {
    const lista = document.querySelector('.nav__bar-lista');
    lista.classList.toggle('active');
    if (lista.classList.contains('active')) {
        btnHamburguer.src = './images/icon-close.svg';
    } else {
        btnHamburguer.src = './images/icon-hamburger.svg';
    }
})



