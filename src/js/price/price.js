// let showMoreTypesButton = document.querySelector('.types__show-more-button');
// let hideTypesButton = document.querySelector('.types__hide-button');
//
// function showTypes(num) {
//
//   let hideTypes = document.querySelectorAll(`.types__item:nth-child(n + ${num})`);
//
//   for (let i = 0; i < hideTypes.length; i++) {
//
//     hideTypes[i].classList.remove('hide');
//     hideTypes[i].classList.add('visible');
//
//   }
//
//   hideTypesButton.classList.remove('hide');
//   showMoreTypesButton.classList.add('hide');
// }
//
// function hideTypes(num) {
//
//   let hideTypes = document.querySelectorAll(`.types__item:nth-child(n + ${num})`);
//
//   for (let i = 0; i < hideTypes.length; i++) {
//
//     hideTypes[i].classList.remove('visible');
//     hideTypes[i].classList.add('hide');
//
//   }
//   showMoreTypesButton.classList.remove('hide');
//   hideTypesButton.classList.add('hide');
// }
//
// function toggleListener() {
//
//   if (window.innerWidth > 767 && window.innerWidth < 1120) {
//
//     showMoreTypesButton.onclick = () => showTypes(4);
//     hideTypesButton.onclick = () => hideTypes(4);
//
//   }
//
//   if (window.innerWidth >= 1120) {
//
//     showMoreTypesButton.onclick = () => showTypes(5);
//     hideTypesButton.onclick = () => hideTypes(5);
//
//   }
// }
//
// window.addEventListener('resize', () => {
//
//   let hideTypes = document.querySelectorAll('.types__item');
//
//   for (let i = 0; i < hideTypes.length; i++) {
//     hideTypes[i].classList.remove('hide');
//     hideTypes[i].classList.remove('visible');
//   }
//
//   showMoreTypesButton.classList.remove('hide');
//   hideTypesButton.classList.add('hide');
//
//   toggleListener();
// });
//
// toggleListener();
//
