export function openClose() {
	const bsOffcanvas = document.querySelector('#navbarOffcanvasLg')
	const toggler = document.querySelector('#menuToggler')
	const mainLogo = document.querySelector('#mainLogo')

	bsOffcanvas.addEventListener('show.bs.offcanvas', () => {
		toggler.classList.add('open')
		mainLogo.classList.add('open')
	})

	bsOffcanvas.addEventListener('hide.bs.offcanvas', () => {
		toggler.classList.remove('open')
		mainLogo.classList.remove('open')
	})
}