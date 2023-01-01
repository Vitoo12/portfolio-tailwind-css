// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// ThemeButton
const html = document.querySelector('html');
const buttonDark = document.querySelector('#buttonDark');
const buttonLight = document.querySelector('#buttonLight');

buttonDark.addEventListener('click', () => {
    html.classList.add('dark');
    buttonDark.classList.add('hidden');
    buttonLight.classList.remove('hidden');
})

buttonLight.addEventListener('click', () => {
    html.classList.remove('dark');
    buttonLight.classList.add('hidden');
    buttonDark.classList.remove('hidden');
})