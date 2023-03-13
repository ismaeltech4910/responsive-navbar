const mobileBtn = document.querySelector('.mobile-toggle');
const mobileNav = document.querySelector('.mobile-menu');


mobileBtn.addEventListener('click', openNavigation);

function openNavigation() {
    mobileBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
};

window.addEventListener('scroll', removeNav);

function removeNav() {
    mobileBtn.classList.remove('open');
    mobileBtn.classList.remove('open');
};