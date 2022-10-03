const hamburgerMenu = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__list');
const menu2 = document.querySelector('.header__right');


const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
    menu2.classList.toggle('active');
};

hamburgerMenu.addEventListener('click', menuIsActive)