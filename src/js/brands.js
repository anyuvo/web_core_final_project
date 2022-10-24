let showMoreBrandsButton = document.querySelector('.brands__show-more-button');
let hideBrandsButton = document.querySelector('.brands__hide-button');

function showBrands(num) {

  let hideBrands = document.querySelectorAll(`.brands__item:nth-child(n + ${num})`);

  for (let i = 0; i < hideBrands.length; i++) {

    hideBrands[i].classList.remove('hide');
    hideBrands[i].classList.add('visible');

  }

  hideBrandsButton.classList.remove('hide');
  showMoreBrandsButton.classList.add('hide');
}

function hideBrands(num) {

  let hideBrands = document.querySelectorAll(`.brands__item:nth-child(n + ${num})`);

  for (let i = 0; i < hideBrands.length; i++) {

    hideBrands[i].classList.remove('visible');
    hideBrands[i].classList.add('hide');

  }
  showMoreBrandsButton.classList.remove('hide');
  hideBrandsButton.classList.add('hide');
}

function toggleListener() {

  if (window.innerWidth > 767 && window.innerWidth < 1120) {

    showMoreBrandsButton.onclick = () => showBrands(7);
    hideBrandsButton.onclick = () => hideBrands(7);

  }

  if (window.innerWidth >= 1120) {

    showMoreBrandsButton.onclick = () => showBrands(9);
    hideBrandsButton.onclick = () => hideBrands(9);

  }
}

window.addEventListener('resize', () => {

  let hideBrands = document.querySelectorAll('.brands__item');

  for (let i = 0; i < hideBrands.length; i++) {
    hideBrands[i].classList.remove('hide');
    hideBrands[i].classList.remove('visible');
  }

  showMoreBrandsButton.classList.remove('hide');
  hideBrandsButton.classList.add('hide');

  toggleListener();
});

toggleListener();

