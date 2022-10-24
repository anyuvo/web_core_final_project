import Swiper from '../swiper/swiper.min';

const slider = document.querySelector('.types-slider-container');

let myTypesSwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		myTypesSwiper = new Swiper(slider, {
			slidesPerView: "auto",
			spaceBetween: 16,
			slideClass: 'types__item',
			pagination: {
				el: '.swiper-pagination',
                type: 'bullets',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			myTypesSwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});
