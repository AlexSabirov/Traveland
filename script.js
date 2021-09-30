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

// Slider

const items = document.querySelectorAll(".special-offers__item");
const sliderLine = document.querySelector(".special-offers__items");
console.log(items);
let count = 0;
let width;

function init() {
	width = document.querySelector(".special-offers__items-wrapper").offsetWidth;
	console.log(width);
	sliderLine.style.width = width * items.length + 'px';
	console.log(sliderLine.style.width);
	items.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	})
}

window.addEventListener('resize', init())

document.querySelector('.special-offers__prev').addEventListener('click', () => {
	count--;
	if (count < 0) {
		count = items.length - 1;
	}
	rollSlider()
});

document.querySelector('.special-offers__next').addEventListener('click', () => {
	count++;
	if (count > items.length - 1) {
		count = 0;
	}
	rollSlider()
});

function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * width + 'px';
}

init();