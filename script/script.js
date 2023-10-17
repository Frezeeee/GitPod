new Swiper(".users__swiper", {
	slidesPerView: 3.3,
	spaceBetween: 24,
	slidesPerGroup: 1,
	centeredSlide: true,
	autoplay: {
		delay: 2000,
		stopOnLastSlide: false,
	},
	speed: 2000,
	breakpoints: {
		0: {
			slidesPerView: 1.3,
		},
		600: {
			slidesPerView: 2,
		},
		978: {
			slidesPerView: 3,
		},
		1170: {
			slidesPerView: 3.3,
		},
	},
});
const popupContainer = document.getElementById("popup-container");
const closeButton = document.getElementById("close-button");
popupContainer.style.bottom = "0";
function closePopup() {
	popupContainer.style.bottom = "-100%";
}
closeButton.addEventListener("click", function () {
	closePopup();
});

const openBurgerBtn = document.querySelector(".header__burger");
const closeBurgerBtn = document.querySelector(".header__x");
const headerContent = document.querySelector(".header__main-content");
const bodyHidden = document.body;

openBurgerBtn.addEventListener("click", openBurger);
closeBurgerBtn.addEventListener("click", closeBurger);
headerContent.addEventListener("click", closeBurger);

function openBurger() {
	headerContent.style.display = "flex";
	closeBurgerBtn.style.display = "block";
	openBurgerBtn.style.display = "none";
	bodyHidden.style.overflow = "hidden";
}
function closeBurger() {
	headerContent.style.display = "none";
	closeBurgerBtn.style.display = "none";
	openBurgerBtn.style.display = "block";
	bodyHidden.style.overflow = "visible";
}
