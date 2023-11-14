document.addEventListener('click', e => {
	const target = e.target
	if (target.classList == 'icon-menu') {
		document.documentElement.classList.toggle('menu-open')
	}
})
