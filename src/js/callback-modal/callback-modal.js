let callbackModal = document.querySelector('.callback-modal');
let openCallbackButtons = document.querySelectorAll('.open-callback');
let closeCallbackButton = document.querySelector('.callback-modal__close-button');
let blurArea = document.querySelector('.callback-modal__background');

let openCallbackModal = () => {
  callbackModal.classList.remove('visually-hidden');
}

let closeCallbackModal = () => {
  callbackModal.classList.add('visually-hidden');
}

for (let i = 0; i < openCallbackButtons.length; i++) {
  openCallbackButtons[i].addEventListener('click', openCallbackModal);
}

closeCallbackButton.addEventListener('click', closeCallbackModal);
blurArea.addEventListener('click', closeCallbackModal);
