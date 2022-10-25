let feedbackModal = document.querySelector('.feedback-modal');
let openFeedbackButtons = document.querySelectorAll('.open-feedback');
let closeFeedbackButton = document.querySelector('.feedback-modal__close-button');
let blurArea = document.querySelector('.feedback-modal__background');

let openFeedbackModal = () => {
  feedbackModal.classList.remove('visually-hidden');
}

let closeFeedbackModal = () => {
  feedbackModal.classList.add('visually-hidden');
}

for (let i = 0; i < openFeedbackButtons.length; i++) {
  openFeedbackButtons[i].addEventListener('click', openFeedbackModal);
}

closeFeedbackButton.addEventListener('click', closeFeedbackModal);
blurArea.addEventListener('click', closeFeedbackModal);
