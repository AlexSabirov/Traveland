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

// Slider Special Offers

const itemsSO = document.querySelectorAll(".special-offers__item");
const sliderLineSO = document.querySelector(".special-offers__items");
let countSO = 0;
let widthSO;

function initSO() {
	widthSO = document.querySelector(".special-offers__item").offsetWidth;
	sliderLineSO.style.width = widthSO * itemsSO.length + 'px';
	itemsSO.forEach(item => {
		item.style.width = widthSO + 'px';
		item.style.height = 'auto';
	})

	rollSliderSO();
}

window.addEventListener('resize', initSO())

document.querySelector('.special-offers__prev').addEventListener('click', () => {
	countSO--;
	if (countSO < 0) {
		countSO = itemsSO.length - 1;
	}
	rollSliderSO()
});

document.querySelector('.special-offers__next').addEventListener('click', () => {
	countSO++;
	if (countSO > itemsSO.length - 1) {
		countSO = 0;
	}
	rollSliderSO()
});

function rollSliderSO() {
	sliderLineSO.style.transform = 'translate(-' + countSO * widthSO + 'px';
}

initSO();


// Slider Blog & News

const itemsBN = document.querySelectorAll(".viewport__item");
const sliderLineBN = document.querySelector(".viewport__items");
let countBN = 0;
let widthBN;

function initBN() {
	widthBN = document.querySelector(".viewport__item").offsetWidth;
	sliderLineBN.style.width = widthBN * itemsBN.length + 'px';
	itemsBN.forEach(item => {
		item.style.width = widthBN + 'px';
		item.style.height = 'auto';
	})

	rollSliderBN();
}

window.addEventListener('resize', initBN())

document.querySelector('.viewport__prev').addEventListener('click', () => {
	countBN--;
	if (countBN < 0) {
		countBN = itemsBN.length - 1;
	}
	rollSliderBN()
});

document.querySelector('.viewport__next').addEventListener('click', () => {
	countBN++;
	if (countBN > itemsBN.length - 1) {
		countBN = 0;
	}
	rollSliderBN()
});

function rollSliderBN() {
	sliderLineBN.style.transform = 'translate(-' + countBN * widthBN + 'px';
	console.log(sliderLineBN.style.transform)
}

initBN();
