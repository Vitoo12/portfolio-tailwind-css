// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const backTop = document.querySelector('#backtop')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        backTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        backTop.classList.add('hidden');
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
    buttonLight.classList.add('flex');
    localStorage.theme = 'dark';
})

buttonLight.addEventListener('click', () => {
    html.classList.remove('dark');
    buttonLight.classList.add('hidden');
    buttonDark.classList.remove('hidden');
    buttonDark.classList.add('flex');
    localStorage.theme = 'light';
})

// Klik Di luar hamburger
window.addEventListener('click', (e) => {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// Theme penyimpanan local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
    buttonDark.classList.add('hidden');
    buttonLight.classList.remove('hidden');
    buttonLight.classList.add('flex');
  } else {
    html.classList.remove('dark')
    buttonLight.classList.add('hidden');
    buttonDark.classList.remove('hidden');
    buttonDark.classList.add('flex');
  }