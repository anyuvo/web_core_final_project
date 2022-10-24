let nav = document.querySelector('.nav');
let openNavButton = document.getElementById('open-nav');
let closeNavButton = document.getElementById('close-nav');

let openNav = () => {
  nav.classList.remove('visually-hidden');
}

let closeNav = () => {
  nav.classList.add('visually-hidden');
}

openNavButton.addEventListener('click', openNav);
closeNavButton.addEventListener('click', closeNav);