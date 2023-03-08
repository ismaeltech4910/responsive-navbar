const menuBtn = document.querySelector('.mobile-nav');
const mobileNav = document.querySelector('.mobile-menu');


function openNavigation() {
    menuBtn.classList.toggle('.open');
}

mobileNav.addEventListener('click', openNavigation);