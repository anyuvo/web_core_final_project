import Swiper from '../swiper/swiper.min';

const slider = document.querySelector('.price-slider-container');

let myPriceSwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		myPriceSwiper = new Swiper(slider, {
			slidesPerView: "auto",
			spaceBetween: 16,
			slideClass: 'price__item',
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
			myPriceSwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});
