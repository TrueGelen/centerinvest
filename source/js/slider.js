
import { Swiper, Pagination, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Pagination, Navigation]);

	new Swiper('.slider .container .slider__wrapperSwiper .slider__swiper-container', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination_phone',
			type: 'bullets'
		},
		navigation: {
			prevEl: '.slider .container .slider__wrapperSwiper .slider__buttons .slider__btn_left',
			nextEl: '.slider .container .slider__wrapperSwiper .slider__buttons .slider__btn_right',
		}
	})
})