// Burger menu

const menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
	const headerNav = document.querySelector('.navigation__menu');
	menuBurger.addEventListener('click', function () {
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		headerNav.classList.toggle('active');
	})
}