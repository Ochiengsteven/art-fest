const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const home = document.querySelector('a[href="#about"]');
const program = document.querySelector('a[href="#program"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
program.addEventListener('click', close);
home.addEventListener('click', close);
