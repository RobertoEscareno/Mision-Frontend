var hamburger = document.querySelector('header .hamburger');

function toogleHamburger() {
    hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', toogleHamburger());