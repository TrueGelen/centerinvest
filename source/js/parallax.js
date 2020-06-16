import Rellax from 'rellax'

window.addEventListener('load', () => {
	const lineRellax = new Rellax('.rellax', {
		// breakpoints: [1025],
		speed: (window.innerWidth > 1024) ? 2 :
			(window.innerWidth > 768) ? 1 : 0.5,
		center: true,
		round: true,
		vertical: true,
		horizontal: false
	})

	const cardsRellax = new Rellax('.rellaxCards', {
		speed: (window.innerWidth > 560) ? 4 : 2,
		// speed: 10,
		center: true,
		round: true,
		vertical: true,
		horizontal: false
	})
})