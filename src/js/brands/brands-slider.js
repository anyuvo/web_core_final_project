import Swiper from '../swiper/swiper.min';

const slider = document.querySelector('.brands-slider-container');

let myBrandsSwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		myBrandsSwiper = new Swiper(slider, {
			slidesPerView: "auto",
			spaceBetween: 16,
			slideClass: 'brands__item',
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
			myBrandsSwiper.destroy();
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});
