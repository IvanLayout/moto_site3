window.addEventListener('load', () => {
	//Вызов класса модальных окон
	const popup = new Popup({});
	// Проверка поддержки Webp
	isWebp();
	// Подключение табов
	tabs();
	// Подключение спойлеров
	spollers();
	// Вызов функции каталога
	headerCatalog();
	// Вызов функций navbar
	navbar();
	// Вызов функций для выпадающего меню
	dropDownTouch();
	// Вызов слайдера
	initSliders();
	// Функция запуска видео
	reviewsVideo();
	// Функция показать кнопки для звонков
	floatingActiveShow();
	// Функция фиксации шапки при прокручивании
	scrollHeader();
	// Функция фиксации нижней панели на телефоне
	scrollFooterPanel();
	// Функция зума для схемы
	nodeZoom();
	// Функция выпадабщего списка аналогов
	analoguesDropdown();
	// Функция тултипов на схеме
	nodeTooltip();
	// Функция тултипов в модалке
	nodeTooltipModal();
	// Функция показать элементы навинаци в карточке
	cardParts();
	// Функция ползунка в фильтрах
	rangeInit();
	// Функция кастомного селекта
	select();
	// Функция переключения количество карточек
	viewParts();
	// Функция количество товаров
	formQuantity();
	// Функция показать еще
	showMore();
	// Функция выпадающего списка
	dropdown();
	// Функция фильтрации карточек заказов
	filter();
	// Функция показать боковую папанель
	showAsideOrders();
	// Инициализация карты
	if(ymaps) {
		ymaps.ready(initMap);
	}
});


document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll(".action-card__favorite, .action-card__compare, .card-basket__action-favorite, .info-good__toggle-favorite, .info-good__toggle-compare").forEach(function(element){
		element.addEventListener("click", function(e){
			e.preventDefault()
	
			if ( element.classList.contains('_active') ){
				element.classList.remove('_active')
			} else {
				element.classList.add('_active')
			}
		})
	})

	if ( document.querySelector(".master-checkbox") ) {
		const masterCheckbox = document.querySelector(".master-checkbox");
		const checkboxes = document.querySelectorAll(".inner-checkbox");

		masterCheckbox.addEventListener("change", function () {
			checkboxes.forEach(checkbox => {
				checkbox.checked = masterCheckbox.checked;
			});
		});
	}


	if ( document.querySelector("#check-recipient") ) {
		const checkRecipient = document.querySelector("#check-recipient");
		const logisticsRecipientInput = document.querySelectorAll(".logistics__recipient-input");

		checkRecipient.addEventListener("change", function () {
			logisticsRecipientInput.forEach(input => {
				input.disabled = this.checked;
			});
		});
	}

	if (document.querySelectorAll('.form__input')) {
		const formInput = document.querySelectorAll('.form__input')

		formInput.forEach(function(e){
			formAnim(e)

			e.addEventListener("change", () => {
				formAnim(e)
			})
		})
	}

	if (document.querySelectorAll('.form__textarea')) {
		const formTextarea = document.querySelectorAll('.form__textarea')

		formTextarea.forEach(function(e){
			formAnim(e)

			e.addEventListener("change", () => {
				formAnim(e)
			})
		})
	}
})


//Библиотеки
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.welcome__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.welcome__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			autoHeight: true,
			speed: 800,
			autoplay: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			//navigation: {
			//	prevEl: '.swiper-button-prev',
			//	nextEl: '.swiper-button-next',
			//},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
		});
	}
	if (document.querySelector('.reviews__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.reviews__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 24,
			autoHeight: true,
			speed: 1000,
			//effect: 'fade',
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.reviews__slider-button--prev',
				nextEl: '.reviews__slider-button--next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			on: {
				slideChange: function (swiper) {
					stopVideos();
					currentFraction();

					function currentFraction() {
						const currentSlide = document.querySelector('.fraction__current');
						currentSlide.innerHTML =
							swiper.realIndex + 1 < 10
								? `${swiper.realIndex + 1}`
								: swiper.realIndex + 1;
					}

					function stopVideos() {
						const videoPlayers = document.querySelectorAll(
							'.reviews__review-media'
						);
						videoPlayers.forEach(videoPlayer => {
							if (videoPlayer.classList.contains('playing')) {
								videoPlayer.querySelector('.reviews__review-video').pause();
								videoPlayer.classList.remove('playing');
							}
						});
					}
				},
				init: function (swiper) {
					const allSlides = document.querySelector('.fraction__all');
					const allSlidesItems = document.querySelectorAll(
						'.reviews__slider-slide:not(.swiper-slide-duplicate)'
					);
					allSlides.innerHTML =
						allSlidesItems.length < 10
							? `${allSlidesItems.length}`
							: allSlidesItems.length;
				},
			},
			// Події
		});
	}
	if (document.querySelector('.actions-parts__category')) {
		new Swiper('.actions-parts__category', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 8,
			autoHeight: true,
			speed: 1000,
			scrollbar: {
				el: '.actions-parts__category-scrollbar',
				draggable: true,
			},
			//effect: 'fade',
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Події
		});
	}
	if (document.querySelector('.sliders-good__thumbs')) {
		const sliderThumbs = new Swiper('.sliders-good__thumbs', {
			freeMode: true,
			speed: 800,
			watchOverflow: true,
			watchSlidesProgress: true,
			observeSlideChildren: true,
			observeParents: true,
			observer: true,
			slidesPerView: 'auto',
			spaceBetween: 32,
			centeredSlides: true,
		});
		new Swiper('.sliders-good__slider', {
			//observer: true,
			watchOverflow: true,
			//observeParents: true,
			observeSlideChildren: true,
			observeParents: true,
			observer: true,
			spaceBetween: 0,
			thumbs: {
				swiper: sliderThumbs,
				autoScrollOffset: 2
			},
			pagination: {
				el: '.sliders-good__slider-pagination',
				clickable: true,
			},
		});
	}
	if (document.querySelectorAll('.recommend-good__slider').length) {
		const recommendSliders = document.querySelectorAll(
			'.recommend-good__slider'
		);
		recommendSliders.forEach(slider => {
			new Swiper(slider, {
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 16,
				speed: 1000,

				breakpoints: {
					320: {
						slidesPerView: 1.5,
						spaceBetween: 16,
					},
					575: {
						slidesPerView: 2,
						spaceBetween: 16,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1268: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		});
	}
	if (document.querySelector('.post__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.post__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 16,
			autoHeight: true,
			speed: 1000,
			//effect: 'fade',
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.post__slider-button--prev',
				nextEl: '.post__slider-button--next',
			},
			// Брейкпоінти
			breakpoints: {
				360: {
					slidesPerView: 'auto',
					spaceBetween: 16,
				},
				575: {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
			on: {
				slideChange: function (swiper) {
					currentFraction();
					function currentFraction() {
						const currentSlide = document.querySelector(
							'.post__slider-fraction-current'
						);
						currentSlide.innerHTML =
							swiper.realIndex + 1 < 10
								? `0${swiper.realIndex + 1}`
								: `${swiper.realIndex + 1}`;
					}
				},
				init: function (swiper) {
					const allSlides = document.querySelector(
						'.post__slider-fraction-all span'
					);
					const allSlidesItems = document.querySelectorAll(
						'.post__slider-slide:not(.swiper-slide-duplicate)'
					);
					allSlides.innerHTML =
						allSlidesItems.length < 10
							? `0${allSlidesItems.length}`
							: `${allSlidesItems.length}`;
				},
			},
			// Події
		});
	}
	if (document.querySelector('.team__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.team__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 800,
			slidesPerView: 'auto',
			spaceBetween: 16,
			navigation: {
				prevEl: '.team__btn-slider--prev',
				nextEl: '.team__btn-slider--next',
			},
			// Брейкпоінти
			breakpoints: {
				575: {
					slidesPerView: 2,
					spaceBetween: 24,
					autoHeight: true,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
			// Події
		});
	}
	if (document.querySelector('.compare__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.compare__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			speed: 800,
			slidesPerView: 'auto',
			spaceBetween: 16,
			navigation: {
				prevEl: '.compare__btn-slider--prev',
				nextEl: '.compare__btn-slider--next',
			},
			// Події
			breakpoints: {
				575: {
					spaceBetween: 24,
				},
			},
			pagination: {
				el: '.compare__pagination',
				clickable: true,
				// dynamicBullets: true,
				// dynamicMainBullets: 3,
			},
			on: {
				init: function (swiper) {
					let swiperEl = swiper.el.querySelectorAll('.compare__item-card');
					let heig = Math.max(...Array.from(swiperEl, el => el.clientHeight));

					swiper.el.querySelector('.compare__pagination').style.top = heig + 'px';
				},
				resize: function (swiper){
					let swiperEl = swiper.el.querySelectorAll('.compare__item-card');
					let heig = Math.max(...Array.from(swiperEl, el => el.clientHeight));

					swiper.el.querySelector('.compare__pagination').style.top = heig + 'px';
				}
			}
		});
	}
	if (document.querySelectorAll('.companies.swiper')) {
		const companiesSliders = document.querySelectorAll('.companies.swiper');
		companiesSliders.forEach(companiesSlider => {
			new Swiper(companiesSlider, {
				observer: true,
				observeParents: true,
				speed: 4000,
				autoplay: {
					delay: 0,
					//pauseOnMouseEnter: true,
					disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
				},
				loop: true,
				breakpoints: {
					320: {
						slidesPerView: 2.5,
						centeredSlides: true,
						spaceBetween: 8,
					},
					575: {
						slidesPerView: 3,
						spaceBetween: 8,
					},
					767: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 7,
						spaceBetween: 24,
					},
				},
			});
		});
	}
}
;

// Catalog menu
function headerCatalog() {
	const catalogBtn = document.querySelector('.bottom-header__btn-catalog');
	const catalogDropdown = document.querySelector('.catalog-header');
	const catalogWrapper = document.querySelector('.catalog-header__wrapper');

	if (catalogBtn && catalogDropdown) {
		catalogBtn.addEventListener('click', e => {
			e.preventDefault();
			catalogBtn.classList.toggle('active');
			catalogDropdown.classList.toggle('open');
			if (catalogBtn.classList.contains('active')) {
				bodyLock();
			} else {
				bodyUnlock();
			}
		});

		document.addEventListener('click', function (e) {
			const target = e.target;
			if (
				!catalogBtn.contains(target) &&
				!catalogWrapper.contains(target) &&
				catalogDropdown.classList.contains('open')
			) {
				catalogBtn.classList.remove('active');
				catalogDropdown.classList.remove('open');
				bodyUnlock();
			}
		});
	}
}

//navbar
function navbar() {
	const burgerBtn = document.querySelector('.navbar-header__burger');
	const closeBtn = document.querySelector('.navbar-header__btn-close');
	const wrapper = document.querySelector('.navbar-header__wrapper');
	const openDropdownBtns = document.querySelectorAll('[data-open-panel]');
	const closeDropdownBtns = document.querySelectorAll('[data-close-panel]');
	const btnBottomPanel = document.querySelector(
		'.panel-footer__button--catalog'
	);
	openNavbar();
	closeNavbar();
	dropdownOpen();
	dropdownClose();

	function openNavbar() {
		if (burgerBtn) {
			burgerBtn.addEventListener('click', e => {
				e.preventDefault();
				burgerBtn.classList.add('active');
				wrapper.classList.add('open');
				bodyLock();
			});
		}

		if (btnBottomPanel) {
			btnBottomPanel.addEventListener('click', e => {
				e.preventDefault();
				wrapper.classList.add('open');
				bodyLock();
			});
		}
	}

	function closeNavbar() {
		if (wrapper) {
			wrapper.addEventListener('click', e => {
				const target = e.target;
				if (
					!e.target.classList.contains('navbar-header__body') &&
					!e.target.closest('.navbar-header__body')
				) {
					burgerBtn.classList.remove('active');
					wrapper.classList.remove('open');
					bodyUnlock();
				}
			});
		}
		if (closeBtn) {
			closeBtn.addEventListener('click', e => {
				e.preventDefault();
				burgerBtn.classList.remove('active');
				wrapper.classList.remove('open');
				bodyUnlock();
			});
		}
	}

	function dropdownOpen() {
		if (openDropdownBtns.length) {
			openDropdownBtns.forEach(button => {
				button.addEventListener('click', e => {
					e.preventDefault();
					button.nextElementSibling.style.left = '0%';
				});
			});
		}
	}

	function dropdownClose() {
		if (closeDropdownBtns.length) {
			closeDropdownBtns.forEach(button => {
				button.addEventListener('click', e => {
					e.preventDefault();
					button.parentElement.style.left = '100%';
				});
			});
		}
	}
}

//DropDown Menu

function dropDownTouch() {
	const garageBtn = document.querySelector('.garage-header__btn');
	const garageDropDown = document.querySelector('.garage-header__dropdown');
	const phoneBtn = document.querySelector('.phone-header__btn');
	const phoneDropDown = document.querySelector('.phone-header__dropdown');
	const popup = document.querySelector('.popup');
	if (isMobile.any()) {
		if (garageBtn) {
			garageBtn.addEventListener('click', e => {
				e.preventDefault();
				garageBtn.classList.toggle('active');
				garageDropDown.classList.toggle('open');
			});
		}
		if (phoneBtn) {
			phoneBtn.addEventListener('click', e => {
				e.preventDefault();
				phoneBtn.classList.toggle('active');
				phoneDropDown.classList.toggle('open');
			});
		}

		document.addEventListener('click', function (e) {
			const target = e.target;
			if (
				!garageBtn.contains(target) &&
				!garageDropDown.contains(target) &&
				!popup.contains(target)
			) {
				garageBtn.classList.remove('active');
				garageDropDown.classList.remove('open');
			}

			if (
				!phoneBtn.contains(target) &&
				!phoneDropDown.contains(target) &&
				!popup.contains(target)
			) {
				phoneBtn.classList.remove('active');
				phoneDropDown.classList.remove('open');
			}
		});
	}
}

function reviewsVideo() {
	const videos = document.querySelectorAll('.reviews__review-media');

	if (!videos.length) return;
	videos.forEach(vedeo => {
		vedeo.addEventListener('click', function (e) {
			const medid = this;
			const player = medid.querySelector('.reviews__review-video');
			if (medid.classList.contains('playing')) {
				player.pause();
				medid.classList.remove('playing');
			} else if (e.target.closest('.reviews__review-play')) {
				player.play();
				medid.classList.add('playing');
			} else {
				player.play();
				medid.classList.add('playing');
			}
		});
	});
}

function floatingActiveShow() {
	const floatingBtn = document.querySelector('.floating-action__btn');
	const floating = document.querySelector('.floating-action');
	if (floatingBtn && floating) {
		floatingBtn.addEventListener('click', e => {
			e.preventDefault();
			document.documentElement.classList.toggle('floating-action-show');
		});

		document.addEventListener('click', e => {
			const target = e.target;
			if (
				!floatingBtn.contains(target) &&
				!floating.contains(target) &&
				document.documentElement.classList.contains('floating-action-show')
			) {
				document.documentElement.classList.remove('floating-action-show');
			}
		});
	}
}

function scrollHeader() {
	const headerElement = document.querySelector('.top-header');
	const headerBottom = document.querySelector('.bottom-header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			document.documentElement.classList.remove('header-fixet');
			headerBottom.removeAttribute('data-lp');
			if (document.documentElement.classList.contains('floating-action-show')) {
				document.documentElement.classList.remove('floating-action-show');
			}
		} else {
			document.documentElement.classList.add('header-fixet');
			headerBottom.setAttribute('data-lp', '');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}

function scrollFooterPanel() {
	const footer = document.querySelector('.footer');
	const panel = document.querySelector('.panel-footer');
	const panelHeight = panel.offsetHeight;
	const viport = window.screen.width;

	const callback = function (entries, observer) {
		if (viport < 575) {
			if (entries[0].isIntersecting) {
				panel.classList.remove('panel-fixed');
				footer.style.paddingBottom = null;
				panel.removeAttribute('data-lp', '');
			} else {
				panel.classList.add('panel-fixed');
				footer.style.paddingBottom = `${panelHeight}px`;
				panel.setAttribute('data-lp', '');
			}
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(footer);
}

// Zoom
function nodeZoom() {
	/*
	if (document.querySelector('.scheme-node__image')) {
		//const image = document
		//	.querySelector('.scheme-node__image__image')
		//	.querySelector('img');
		//const scheme = document.querySelector('.scheme-node__image img');
		const scheme = document.querySelector('.node__images');
		const wzoom = new WZoom.create('.scheme-node__image', {
			type: 'html',
			width: 1000,
			height: 1000,
			//width: scheme.naturalWidth,
			//height: scheme.naturalHeight,
			//width: scheme.offsetWidth,
			//height: scheme.offsetHeight,
			minScale: 0.8,
			maxScale: 2,
			zoomOnClick: false,
			zoomOnDblClick: false,
			speed: 1.25,
			dragScrollableOptions: {
				onGrab: function () {
					document.querySelector('.scheme-node__image').style.cursor =
						'grabbing';
				},
				onDrop: function () {
					document.querySelector('.scheme-node__image').style.cursor = 'grab';
				},
			},
		});

		document
			.querySelector('.scheme-node__control--increment')
			.addEventListener('click', () => {
				wzoom.zoomUp();
			});

		document
			.querySelector('.scheme-node__control--decrement')
			.addEventListener('click', () => {
				wzoom.zoomDown();
			});
	}

	if (document.querySelector('.scheme-node__image')) {
		const schemeNode = document.querySelector('.scheme-node__image');
		const btnUp = document.querySelector('.scheme-node__control--increment');
		const btnDown = document.querySelector('.scheme-node__control--decrement');
		//const zoomSchemeNode = panzoom(schemeNode, {
		//	maxZoom: 3,
  		//	minZoom: 1
		//});
		//new Panzoom(schemeNode, {
		//	//content: ".scheme-node__image",
		//	//transformParent: true,
		//	//Toolbar: {
		//	//	display: ["zoomIn", "zoomOut"],
		//	// },
		//});
		//btnUp.addEventListener('click', function (e) {
		//	zoomSchemeNode.zoomIn();
		//});
		//btnDown.addEventListener('click', function (e) {
		//	zoomSchemeNode.zoomOut();
		//});

	}
	if (document.querySelector('.fullscreen-node-popup__image')) {
		const popup = document.querySelector('.fullscreen-node-popup');

		const wzoom = WZoom.create('.fullscreen-node-popup__image', {
			type: 'html',
			width: popup.offsetWidth,
			height: popup.offsetHeight,
			minScale: checkViport(),
			maxScale: 4,
			zoomOnClick: false,
			zoomOnDblClick: false,
			speed: 1.25,
			dragScrollableOptions: {
				onGrab: function () {
					document.querySelector('.fullscreen-node-popup__image').style.cursor =
						'grabbing';
				},
				onDrop: function () {
					document.querySelector('.fullscreen-node-popup__image').style.cursor =
						'grab';
				},
			},
		});

		document
			.querySelector('.fullscreen-node-popup__control--increment')
			.addEventListener('click', () => {
				wzoom.zoomUp();
			});

		document
			.querySelector('.fullscreen-node-popup__control--decrement')
			.addEventListener('click', () => {
				wzoom.zoomDown();
			});

		function checkViport() {
			let viport;
			let winScreen = window.screen.width;

			if (winScreen < 767) {
				viport = 1;
			} else {
				viport = 1.5;
			}
			return viport;
		}
	}
	*/

	if(document.querySelector('.scheme-node__image')) {
		const scheme = document.querySelector('.scheme-node__image');
		const btnUp = document.querySelector('.scheme-node__control--increment');
		const btnDown = document.querySelector('.scheme-node__control--decrement');

		const panzoomInstance = panzoom(scheme, {
			maxZoom: 4,
			minZoom: 1,
			transformOrigin: {x: 0.5, y: 0.5},
			smoothScroll: false,
			zoomDoubleClickSpeed: 1,
			onTouch: function(e) {
				return false; // tells the library to not preventDefault.
			 }
		 });

		 scheme.addEventListener('mousedown', function() {
			scheme.style.cursor = 'grabbing';
		 });

		 scheme.addEventListener('mouseup', function() {
			scheme.style.cursor = 'grab';
		 });
		 scheme.addEventListener('mouseenter', function() {
			scheme.style.cursor = 'grab';
		 });

		 scheme.addEventListener('mouseleave', function() {
			scheme.style.cursor = 'grab';
		 });
		 panzoomInstance.on('panend', function() {
			scheme.style.cursor = 'grab';
		 });

		 let rect = scheme.getBoundingClientRect();
		 let cx = rect.width/2;
		 let cy = rect.height/2;

		 btnUp.addEventListener('click', e => {
			e.preventDefault();
			//panzoomInstance.zoomTo(0.5, 0.5, 1.5);
			panzoomInstance.smoothZoom(cx, cy, 1.5);

		 })

		 btnDown.addEventListener('click', e => {
			e.preventDefault();
			panzoomInstance.smoothZoom(cx, cy, 0.5);
		 })
	}

	if (document.querySelector('.fullscreen-node-popup__image')) {
		const shemePopup = document.querySelector('.fullscreen-node-popup__image');
		const btnUp = document.querySelector('.fullscreen-node-popup__control--increment');
		const btnDown = document.querySelector('.fullscreen-node-popup__control--decrement');
		const panzoomPopup = panzoom(shemePopup, {
			maxZoom: 4,
			minZoom: 1,
			transformOrigin: {x: 0.5, y: 0.5},
			smoothScroll: false,
			zoomDoubleClickSpeed: 1,
			onTouch: function(e) {
				return false; // tells the library to not preventDefault.
			 }
		});

		shemePopup.addEventListener('mousedown', function() {
			shemePopup.style.cursor = 'grabbing';
		 });

		 shemePopup.addEventListener('mouseup', function() {
			shemePopup.style.cursor = 'grab';
		 });
		 shemePopup.addEventListener('mouseenter', function() {
			shemePopup.style.cursor = 'grab';
		 });

		 shemePopup.addEventListener('mouseleave', function() {
			shemePopup.style.cursor = 'grab';
		 });

		 panzoomPopup.on('panend', function() {
			shemePopup.style.cursor = 'grab';
		 });

		 let rect = shemePopup.getBoundingClientRect();
		 let cx = rect.width/2;
		 let cy = rect.height/2;

		btnUp.addEventListener('click', e => {
			e.preventDefault();
			panzoomPopup.smoothZoom(cx, cy, 2);
		 })

		 btnDown.addEventListener('click', e => {
			e.preventDefault();
			panzoomPopup.smoothZoom(cx, cy, 0.5);
		 })
	}
}

// Analogues dropdown
function analoguesDropdown() {
	const cars = document.querySelectorAll('.part-node');
	if (cars.length) {
		cars.forEach(card => {
			card.addEventListener('click', function (e) {
				const btn = this.querySelector('.part-node__btn-analogues');
				const dropdownList = this.querySelector('.analogues-part');
				if (btn && dropdownList) {
					btn.classList.toggle('active');
					_slideToggle(dropdownList);
				}
			});
		});
	}
}

function nodeTooltip() {
	const tooltips = document.querySelectorAll('.scheme-node__tooltip');
	const items = document.querySelectorAll('.part-node');
	if (tooltips.length && items.length) {
		tooltips.forEach(tooltip => {
			tooltip.addEventListener('click', function (e) {
				e.preventDefault();
				tooltips.forEach(tooltip => tooltip.classList.remove('active'));
				this.classList.add('active');
				const href = this.getAttribute('href').substring(1);

				const scrollTarget = document.getElementById(href);
				items.forEach(item => item.classList.remove('target'));
				if (!scrollTarget) return;
				scrollTarget.classList.add('target');

				const topOffset = document.querySelector('.header').offsetHeight;
				const elementPosition = scrollTarget.getBoundingClientRect().top;
				const elementPaddingTop = window.screen.width < 767 ? 15 : 30;
				const offsetPosititon = elementPosition - elementPaddingTop - topOffset;

				window.scrollBy({
					top: offsetPosititon,
					behavior: 'smooth',
				});
			});
		});
	}
}

function nodeTooltipModal() {
	const tooltips = document.querySelectorAll('.fullscreen-node-popup__tooltip');
	const modal = document.querySelector('.fullscreen-node-popup__reveal');
	const reveal = document.querySelector('.fullscreen-node-popup__reveal');

	if (tooltips.length && modal) {
		tooltips.forEach(tooltip => {
			tooltip.addEventListener('click', function (e) {
				e.preventDefault();
				tooltips.forEach(tooltip => tooltip.classList.remove('active'));
				this.classList.add('active');
				modal.classList.add('show');
			});
		});
	}

	if (reveal) {
		reveal.addEventListener('click', e => {
			const target = e.target;
			if (!target.closest('.fullscreen-node-popup__reveal-part')) {
				reveal.classList.remove('show');
			}
		});
	}
}

function cardParts() {
	const cards = document.querySelectorAll('.catalog-parts__card');

	if (cards.length) {
		cards.forEach(card => {
			card.addEventListener('click', function (e) {
				const target = e.target;
				const btn = this.querySelector('.catalog-parts__card-btn');
				const list = this.querySelector('.catalog-parts__card-list');
				if (target.closest('.catalog-parts__card-btn')) {
					btn.style.display = 'none';
					list.style.display = 'flex';
				}
			});
		});
	}
}

function rangeInit() {
	const rangeItems = document.querySelectorAll('[data-ranges]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const inputs = rangeItem
				.closest('.ranges')
				.querySelectorAll('.ranges__input');
			const rangeMin = parseInt(rangeItem.dataset.min);
			const rangeMax = parseInt(rangeItem.dataset.max);
			const step = parseInt(rangeItem.dataset.step);
			noUiSlider.create(rangeItem, {
				start: [rangeMin, rangeMax],
				connect: true,
				step: step,
				range: {
					min: rangeMin,
					max: rangeMax,
				},

				format: wNumb({
					decimals: 0,
					thousand: ' ',
				}),
			});
			rangeItem.noUiSlider.on('update', (values, handle) => {
				inputs[handle].value = values[handle];
			});

			inputs.forEach((input, indexInput) => {
				input.addEventListener('change', () => {
					rangeItem.noUiSlider.setHandle(indexInput, input.value);
				});
			});
		});
	}
}

function select() {
	if (document.querySelector('.actions-parts__sort-select')) {
		new Choices('.actions-parts__sort-select', {
			searchEnabled: false,
			allowHTML: true,
		});
	}
	if (document.querySelector('.fits-model__select')) {
		new Choices('.fits-model__select', {
			searchEnabled: false,
			allowHTML: true,
		});
	}
	if (document.querySelector('.checkout__select')) {
		new Choices('.checkout__select', {
			searchEnabled: false,
			allowHTML: true,
		});
	}
}

function viewParts() {
	const buttonThree = document.querySelector('.view-parts__button--three');
	const buttonFour = document.querySelector('.view-parts__button--four');
	const cardsParts = document.querySelector('.parts__cards');
	let slider;

	if (document.querySelector('.slider-parts')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		slider = new Swiper('.slider-parts', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			//autoHeight: true,
			slidesPerView: 1.5,
			spaceBetween: 16,
			speed: 1000,
			//effect: 'fade',
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-parts__button--prev',
				nextEl: '.slider-parts__button--next',
			},

			// Брейкпоінти
			breakpoints: {
				575: {
					slidesPerView: 2,
				},
				730: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				1300: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
			},
		});
	}

	if (!buttonThree || !cardsParts || !buttonFour) return;
	if (window.screen.width > 992) threeCards();

	buttonThree.addEventListener('click', e => {
		threeCards();
		if (slider) {
			slider.params.slidesPerView = 3;
			slider.update();
		}
	});
	buttonFour.addEventListener('click', e => {
		fourCards();
		if (slider) {
			slider.params.slidesPerView = 4;
			slider.update();
		}
	});

	function threeCards() {
		if (cardsParts.classList.contains('parts__cards--four')) {
			cardsParts.classList.remove('parts__cards--four');
			buttonFour.classList.remove('active');
			cardsParts.classList.add('parts__cards--three');
			buttonThree.classList.add('active');
		} else {
			cardsParts.classList.add('parts__cards--three');
			buttonThree.classList.add('active');
		}
	}

	function fourCards() {
		if (cardsParts.classList.contains('parts__cards--three')) {
			buttonThree.classList.remove('active');
			cardsParts.classList.remove('parts__cards--three');
			cardsParts.classList.add('parts__cards--four');
			buttonFour.classList.add('active');
		}
	}
}

function formQuantity() {
	const stepperBtnshow = document.querySelector('[data-quantity-show]');

	showStepper();
	document.addEventListener('click', function (e) {
		let targetElement = e.target;
		if (
			targetElement.closest('[data-quantity-plus]') ||
			targetElement.closest('[data-quantity-minus]')
		) {
			const valueElement = targetElement
				.closest('[data-quantity]')
				.querySelector('[data-quantity-value]');
			let value = parseInt(valueElement.value);
			if (targetElement.hasAttribute('data-quantity-plus')) {
				value++;
				if (
					+valueElement.dataset.quantityMax &&
					+valueElement.dataset.quantityMax < value
				) {
					value = valueElement.dataset.quantityMax;
				}
			} else {
				--value;
				if (+valueElement.dataset.quantityMin) {
					if (+valueElement.dataset.quantityMin > value) {
						value = valueElement.dataset.quantityMin;
					}
				} else if (value < 1) {
					value = 1;
					hiddenStepper();
				}
			}
			targetElement
				.closest('[data-quantity]')
				.querySelector('[data-quantity-value]').value = value;
		}
	});

	function showStepper() {
		if (stepperBtnshow) {
			stepperBtnshow.nextElementSibling.style.display = 'none';

			stepperBtnshow.addEventListener('click', function (e) {
				this.nextElementSibling.style.display = 'inline-flex';
				this.style.display = 'none';
			});
		}
	}

	function hiddenStepper() {
		if (stepperBtnshow) {
			stepperBtnshow.nextElementSibling.style.display = 'none';
			stepperBtnshow.style.display = 'flex';
		}
	}
}

function dropdown() {
	dropdownExtradition();
	dropdownTabs();
	dropdownFavorites();
	dropdownCompare();
	function dropdownExtradition() {
		const dropdownextradition = document.querySelector(
			'.dropdown-extradition__list'
		);
		const dropdownBtnextradition = document.querySelector(
			'.dropdown-extradition__dropbtn'
		);

		if (!dropdownextradition && !dropdownBtnextradition) return;

		dropdownBtnextradition.addEventListener('click', () => {
			dropdownextradition.classList.toggle('show');
		});

		window.addEventListener('click', e => {
			const target = e.target;
			if (!dropdownBtnextradition.contains(target)) {
				if (dropdownextradition.classList.contains('show')) {
					dropdownextradition.classList.remove('show');
				}
			}
		});
	}

	function dropdownFavorites() {
		const dropdownFilters = document.querySelector('.favorites__filters');
		const dropdownBtnFilters = document.querySelector('.favorites__dropbtn');

		if (!dropdownFilters && !dropdownBtnFilters) return;

		dropdownBtnFilters.addEventListener('click', () => {
			dropdownFilters.classList.toggle('show');
			dropdownBtnFilters.classList.toggle('active');
		});

		window.addEventListener('click', e => {
			const target = e.target;
			if (!dropdownBtnFilters.contains(target)) {
				if (dropdownFilters.classList.contains('show')) {
					dropdownFilters.classList.remove('show');
					dropdownBtnFilters.classList.remove('active');
					if (target.closest('.favorites__filters-btn')) {
						dropdownBtnFilters.querySelector('span').textContent =
							target.querySelector('span').textContent;
					}
				}
			}
		});
	}

	function dropdownTabs() {
		const dropdownsTabs = document.querySelectorAll('.dropdown-tabs');

		if (dropdownsTabs.length) {
			dropdownsTabs.forEach(dropdown => {
				const button = dropdown.querySelector('.dropdown-tabs__dropbtn');
				const dpopmenu = dropdown.querySelector('.dropdown-tabs__nav');

				if (button && dpopmenu) {
					button.addEventListener('click', function (e) {
						this.nextElementSibling.classList.toggle('show');
						this.classList.toggle('active');
					});
				}
			});

			window.addEventListener('click', e => {
				const target = e.target;

				if (!target.closest('.dropdown-tabs__dropbtn')) {
					const dropdownTabs = document.querySelector('.dropdown-tabs__nav');
					const dropdownBtnTabs = document.querySelector('.dropdown-tabs__dropbtn');
					if (dropdownTabs.classList.contains('show')) {
						dropdownTabs.classList.remove('show');
						dropdownBtnTabs.classList.remove('active');
						if (target.closest('.dropdown-tabs__btn')) {
							dropdownBtnTabs.querySelector('span').textContent =
								target.textContent;
						}
					}
				}

				if (target.closest('.dropdown-tabs__btn')) {
					if (document.querySelector('#pickup-line')) {
						if (target.id === "pickup"){
							document.querySelector('#pickup-line').classList.add('_show')
						} else {
							if (document.querySelector('#pickup-line').classList.contains('_show')) {
								document.querySelector('#pickup-line').classList.remove('_show')
							}
						}
					}
				}
			});
		}
	}

	function dropdownCompare() {
		const dropdownFilters = document.querySelector('.compare__filters');
		const dropdownBtnFilters = document.querySelector('.compare__dropbtn');

		if (!dropdownFilters && !dropdownBtnFilters) return;

		dropdownBtnFilters.addEventListener('click', () => {
			dropdownFilters.classList.toggle('show');
			dropdownBtnFilters.classList.toggle('active');
		});

		window.addEventListener('click', e => {
			const target = e.target;
			if (!dropdownBtnFilters.contains(target)) {
				if (dropdownFilters.classList.contains('show')) {
					dropdownFilters.classList.remove('show');
					dropdownBtnFilters.classList.remove('active');
					if (target.closest('.compare__filters-btn')) {
						dropdownBtnFilters.querySelector('span').textContent =
							target.querySelector('span').textContent;
					}
				}
			}
		});
	}
}

function filter() {
	filterOrders();
	filterFavorites();

	function filterOrders() {
		const filtersListAccount = document.querySelector(
			'.orders-account__filters'
		);
		const filterItemsAccount = document.querySelectorAll(
			'.orders-account__filters-btn'
		);
		const itemsAccount = document.querySelectorAll('.orders-account__item');

		if (
			!filtersListAccount &&
			!filterItemsAccount.length &&
			!itemsAccount.length
		)
			return;

		filtersListAccount.addEventListener('click', e => {
			const targetId = e.target.dataset.filters;
			const target = e.target;
			if (target.classList.contains('orders-account__filters-btn')) {
				filterItemsAccount.forEach(button => button.classList.remove('active'));
				target.classList.add('active');
			}

			if (!targetId) return;

			if (targetId === 'all') {
				getItems('orders-account__item', itemsAccount);
			} else {
				getItems(targetId, itemsAccount);
			}
		});
	}

	function filterFavorites() {
		const filtersListFavorites = document.querySelector('.favorites__filters');
		const filterItemsFavorites = document.querySelectorAll(
			'.favorites__filters-btn'
		);
		const itemsFavorites = document.querySelectorAll('.favorites__item');

		if (
			!filtersListFavorites &&
			!filterItemsFavorites.length &&
			!itemsFavorites.length
		)
			return;

		filtersListFavorites.addEventListener('click', e => {
			const targetId = e.target.dataset.filters;
			const target = e.target;
			if (target.classList.contains('favorites__filters-btn')) {
				filterItemsFavorites.forEach(button =>
					button.classList.remove('active')
				);
				target.classList.add('active');
			}
			if (!targetId) return;

			if (targetId === 'all') {
				getItems('favorites__item', itemsFavorites);
			} else {
				getItems(targetId, itemsFavorites);
			}
		});
	}

	function getItems(className, items) {
		items.forEach(item => {
			if (item.classList.contains(className)) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	}
}

function showAsideOrders() {
	const aside = document.querySelector('.account__tabs-aside');
	const headlines = document.querySelectorAll('.account__headline');

	if (!aside && !headlines.length) return;

	headlines.forEach(headline => {
		headline.addEventListener('click', e => {
			aside.classList.add('show');
			bodyLock();
		});
	});

	aside.addEventListener('click', e => {
		const target = e.target;
		if (window.screen.width < 992 && target.closest('.account__tabs-nav-btn')) {
			aside.classList.remove('show');
			bodyUnlock();
		}
	});
}


function initMap() {
	if (document.querySelector('#map')) {
		const myMap = new ymaps.Map('map', {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: [59.93786005924212, 30.434350932027368],
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: 17,
		});

		const placemark = new ymaps.Placemark(
			[59.938177442235, 30.433735572248377],
			{
				balloonContentBody: 'Вход в магазин',
				icon_imagesize: [15, 24],
			}
		);
		const placemark2 = new ymaps.Placemark(
			[59.93784971784316, 30.43392466798346],
			{
				balloonContentBody: 'Вход в мастерская',
				icon_imagesize: [15, 24],
				iconImageOffset: [0, 0],
			}
		);

		myMap.geoObjects.add(placemark);
		myMap.geoObjects.add(placemark2);

		myMap.controls.remove('geolocationControl'); // удаляем геолокацию
		myMap.controls.remove('searchControl'); // удаляем поиск
		myMap.controls.remove('trafficControl'); // удаляем контроль трафика
		myMap.controls.remove('typeSelector'); // удаляем тип
		myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
		myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
		myMap.controls.remove('rulerControl'); // удаляем контрол правил
		myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	}
}

class DynamicAdapt {
	constructor(type) {
		this.type = type;
	}
	init() {
		// масив об'єктів
		this.оbjects = [];
		this.daClassname = '_dynamic_adapt_';
		// масив DOM-елементів
		this.nodes = [...document.querySelectorAll('[data-da]')];

		// наповнення оbjects об'єктами
		this.nodes.forEach(node => {
			const data = node.dataset.da.trim();
			const dataArray = data.split(',');
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
			оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		});

		this.arraySort(this.оbjects);

		// масив унікальних медіа-запитів
		this.mediaQueries = this.оbjects
			.map(
				({ breakpoint }) =>
					`(${this.type}-width: ${breakpoint}px),${breakpoint}`
			)
			.filter((item, index, self) => self.indexOf(item) === index);

		// навішування слухача на медіа-запит
		// та виклик оброблювача при першому запуску
		this.mediaQueries.forEach(media => {
			const mediaSplit = media.split(',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// масив об'єктів з відповідним брейкпоінтом
			const оbjectsFilter = this.оbjects.filter(
				({ breakpoint }) => breakpoint === mediaBreakpoint
			);
			matchMedia.addEventListener('change', () => {
				this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		});
	}
	// Основна функція
	mediaHandler(matchMedia, оbjects) {
		if (matchMedia.matches) {
			оbjects.forEach(оbject => {
				// оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			});
		} else {
			оbjects.forEach(({ parent, element, index }) => {
				if (element.classList.contains(this.daClassname)) {
					this.moveBack(parent, element, index);
				}
			});
		}
	}
	// Функція переміщення
	moveTo(place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.append(element);
			return;
		}
		if (place === 'first') {
			destination.prepend(element);
			return;
		}
		destination.children[place].before(element);
	}
	// Функція повернення
	moveBack(parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].before(element);
		} else {
			parent.append(element);
		}
	}
	// Функція отримання індексу всередині батьківського єлементу
	indexInParent(parent, element) {
		return [...parent.children].indexOf(element);
	}
	// Функція сортування масиву по breakpoint та place
	// за зростанням для this.type = min
	// за спаданням для this.type = max
	arraySort(arr) {
		if (this.type === 'min') {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return -1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return 1;
					}
					return 0;
				}
				return a.breakpoint - b.breakpoint;
			});
		} else {
			arr.sort((a, b) => {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}
					if (a.place === 'first' || b.place === 'last') {
						return 1;
					}
					if (a.place === 'last' || b.place === 'first') {
						return -1;
					}
					return 0;
				}
				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	}
}
const da = new DynamicAdapt('max');
da.init();

function showMore() {
	const showMoreBlocks = document.querySelectorAll('[data-showmore]');
	let showMoreBlocksRegular;
	let mdQueriesArray;
	if (showMoreBlocks.length) {
		// Отримання звичайних об'єктів
		showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (
			item,
			index,
			self
		) {
			return !item.dataset.showmoreMedia;
		});
		// Ініціалізація звичайних об'єктів
		showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

		document.addEventListener('click', showMoreActions);
		window.addEventListener('resize', showMoreActions);

		// Отримання об'єктів з медіа-запитами
		mdQueriesArray = dataMediaQueries(showMoreBlocks, 'showmoreMedia');
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Подія
				mdQueriesItem.matchMedia.addEventListener('change', function () {
					initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
			});
			initItemsMedia(mdQueriesArray);
		}
	}
	function initItemsMedia(mdQueriesArray) {
		mdQueriesArray.forEach(mdQueriesItem => {
			initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
		});
	}
	function initItems(showMoreBlocks, matchMedia) {
		showMoreBlocks.forEach(showMoreBlock => {
			initItem(showMoreBlock, matchMedia);
		});
	}
	function initItem(showMoreBlock, matchMedia = false) {
		showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
		let showMoreContent = showMoreBlock.querySelectorAll(
			'[data-showmore-content]'
		);
		let showMoreButton = showMoreBlock.querySelectorAll(
			'[data-showmore-button]'
		);
		showMoreContent = Array.from(showMoreContent).filter(
			item => item.closest('[data-showmore]') === showMoreBlock
		)[0];
		showMoreButton = Array.from(showMoreButton).filter(
			item => item.closest('[data-showmore]') === showMoreBlock
		)[0];
		const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
		if (matchMedia.matches || !matchMedia) {
			if (hiddenHeight < getOriginalHeight(showMoreContent)) {
				_slideUp(
					showMoreContent,
					0,
					showMoreBlock.classList.contains('_showmore-active')
						? getOriginalHeight(showMoreContent)
						: hiddenHeight
				);
				showMoreButton.hidden = false;
			} else {
				_slideDown(showMoreContent, 0, hiddenHeight);
				showMoreButton.hidden = true;
			}
		} else {
			_slideDown(showMoreContent, 0, hiddenHeight);
			showMoreButton.hidden = true;
		}
	}
	function getHeight(showMoreBlock, showMoreContent) {
		let hiddenHeight = 0;
		const showMoreType = showMoreBlock.dataset.showmore
			? showMoreBlock.dataset.showmore
			: 'size';
		if (showMoreType === 'items') {
			const showMoreTypeValue = showMoreContent.dataset.showmoreContent
				? showMoreContent.dataset.showmoreContent
				: 3;
			const showMoreItems = showMoreContent.children;
			for (let index = 1; index < showMoreItems.length; index++) {
				const showMoreItem = showMoreItems[index - 1];
				hiddenHeight += showMoreItem.offsetHeight;
				if (index == showMoreTypeValue) break;
			}
		} else {
			const showMoreTypeValue = showMoreContent.dataset.showmoreContent
				? showMoreContent.dataset.showmoreContent
				: 150;
			hiddenHeight = showMoreTypeValue;
		}
		return hiddenHeight;
	}
	function getOriginalHeight(showMoreContent) {
		let parentHidden;
		let hiddenHeight = showMoreContent.offsetHeight;
		showMoreContent.style.removeProperty('height');
		if (showMoreContent.closest(`[hidden]`)) {
			parentHidden = showMoreContent.closest(`[hidden]`);
			parentHidden.hidden = false;
		}
		let originalHeight = showMoreContent.offsetHeight;
		parentHidden ? (parentHidden.hidden = true) : null;
		showMoreContent.style.height = `${hiddenHeight}px`;
		return originalHeight;
	}
	function showMoreActions(e) {
		const targetEvent = e.target;
		const targetType = e.type;
		if (targetType === 'click') {
			if (targetEvent.closest('[data-showmore-button]')) {
				const showMoreButton = targetEvent.closest('[data-showmore-button]');
				const showMoreBlock = showMoreButton.closest('[data-showmore]');
				const showMoreContent = showMoreBlock.querySelector(
					'[data-showmore-content]'
				);
				const showMoreSpeed = showMoreBlock.dataset.showmoreButton
					? showMoreBlock.dataset.showmoreButton
					: '500';
				const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
				if (!showMoreContent.classList.contains('_slide')) {
					showMoreBlock.classList.contains('_showmore-active')
						? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
						: _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
					showMoreBlock.classList.toggle('_showmore-active');
				}
			}
		} else if (targetType === 'resize') {
			showMoreBlocksRegular && showMoreBlocksRegular.length
				? initItems(showMoreBlocksRegular)
				: null;
			mdQueriesArray && mdQueriesArray.length
				? initItemsMedia(mdQueriesArray)
				: null;
		}
	}
}

function spollers() {
	const spollersArray = document.querySelectorAll('[data-spollers]');
	if (spollersArray.length > 0) {
		// Отримання звичайних слойлерів
		const spollersRegular = Array.from(spollersArray).filter(function (
			item,
			index,
			self
		) {
			return !item.dataset.spollers.split(',')[0];
		});
		// Ініціалізація звичайних слойлерів
		if (spollersRegular.length) {
			initSpollers(spollersRegular);
		}
		// Отримання слойлерів з медіа-запитами
		let mdQueriesArray = dataMediaQueries(spollersArray, 'spollers');
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Подія
				mdQueriesItem.matchMedia.addEventListener('change', function () {
					initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
		// Ініціалізація
		function initSpollers(spollersArray, matchMedia = false) {
			spollersArray.forEach(spollersBlock => {
				spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
				if (matchMedia.matches || !matchMedia) {
					spollersBlock.classList.add('_spoller-init');
					initSpollerBody(spollersBlock);
					spollersBlock.addEventListener('click', setSpollerAction);
				} else {
					spollersBlock.classList.remove('_spoller-init');
					initSpollerBody(spollersBlock, false);
					spollersBlock.removeEventListener('click', setSpollerAction);
				}
			});
		}
		// Робота з контентом
		function initSpollerBody(spollersBlock, hideSpollerBody = true) {
			let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
			if (spollerTitles.length) {
				spollerTitles = Array.from(spollerTitles).filter(
					item => item.closest('[data-spollers]') === spollersBlock
				);
				spollerTitles.forEach(spollerTitle => {
					if (hideSpollerBody) {
						spollerTitle.removeAttribute('tabindex');
						if (!spollerTitle.classList.contains('_spoller-active')) {
							spollerTitle.nextElementSibling.hidden = true;
						}
					} else {
						spollerTitle.setAttribute('tabindex', '-1');
						spollerTitle.nextElementSibling.hidden = false;
					}
				});
			}
		}
		function setSpollerAction(e) {
			const el = e.target;
			if (el.closest('[data-spoller]')) {
				const spollerTitle = el.closest('[data-spoller]');
				const spollersBlock = spollerTitle.closest('[data-spollers]');
				const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
				const spollerSpeed = spollersBlock.dataset.spollersSpeed
					? parseInt(spollersBlock.dataset.spollersSpeed)
					: 500;
				if (!spollersBlock.querySelectorAll('._slide').length) {
					if (
						oneSpoller &&
						!spollerTitle.classList.contains('_spoller-active')
					) {
						hideSpollersBody(spollersBlock);
					}
					spollerTitle.classList.toggle('_spoller-active');
					if ( spollerTitle.closest('.questions__spollers-item') ) {
						spollerTitle.closest('.questions__spollers-item').classList.toggle('_active');
					}
					_slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
				}
				e.preventDefault();
			}
		}
		function hideSpollersBody(spollersBlock) {
			const spollerActiveTitle = spollersBlock.querySelector(
				'[data-spoller]._spoller-active'
			);
			const spollerSpeed = spollersBlock.dataset.spollersSpeed
				? parseInt(spollersBlock.dataset.spollersSpeed)
				: 500;
			if (
				spollerActiveTitle &&
				!spollersBlock.querySelectorAll('._slide').length
			) {
				spollerActiveTitle.classList.remove('_spoller-active');
				_slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
			}
		}
		// Закриття при кліку поза спойлером
		const spollersClose = document.querySelectorAll('[data-spoller-close]');
		if (spollersClose.length) {
			document.addEventListener('click', function (e) {
				const el = e.target;
				if (!el.closest('[data-spollers]')) {
					spollersClose.forEach(spollerClose => {
						const spollersBlock = spollerClose.closest('[data-spollers]');
						if (spollersBlock.classList.contains('_spoller-init')) {
							const spollerSpeed = spollersBlock.dataset.spollersSpeed
								? parseInt(spollersBlock.dataset.spollersSpeed)
								: 500;
							spollerClose.classList.remove('_spoller-active');
							_slideUp(spollerClose.nextElementSibling, spollerSpeed);
						}
					});
				}
			});
		}
	}
}

function tabs() {
	const tabs = document.querySelectorAll('[data-tabs]');
	let tabsActiveHash = [];

	if (tabs.length > 0) {
		const hash = getHash();
		if (hash && hash.startsWith('tab-')) {
			tabsActiveHash = hash.replace('tab-', '').split('-');
		}
		tabs.forEach((tabsBlock, index) => {
			tabsBlock.classList.add('_tab-init');
			tabsBlock.setAttribute('data-tabs-index', index);
			tabsBlock.addEventListener('click', setTabsAction);
			initTabs(tabsBlock);
		});

		// Отримання слойлерів з медіа-запитами
		let mdQueriesArray = dataMediaQueries(tabs, 'tabs');
		if (mdQueriesArray && mdQueriesArray.length) {
			mdQueriesArray.forEach(mdQueriesItem => {
				// Подія
				mdQueriesItem.matchMedia.addEventListener('change', function () {
					setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
				});
				setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
			});
		}
	}
	// Встановлення позицій заголовків
	function setTitlePosition(tabsMediaArray, matchMedia) {
		tabsMediaArray.forEach(tabsMediaItem => {
			tabsMediaItem = tabsMediaItem.item;
			let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
			let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
			let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
			let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
			tabsTitleItems = Array.from(tabsTitleItems).filter(
				item => item.closest('[data-tabs]') === tabsMediaItem
			);
			tabsContentItems = Array.from(tabsContentItems).filter(
				item => item.closest('[data-tabs]') === tabsMediaItem
			);
			tabsContentItems.forEach((tabsContentItem, index) => {
				if (matchMedia.matches) {
					tabsContent.append(tabsTitleItems[index]);
					tabsContent.append(tabsContentItem);
					tabsMediaItem.classList.add('_tab-spoller');
				} else {
					tabsTitles.append(tabsTitleItems[index]);
					tabsMediaItem.classList.remove('_tab-spoller');
				}
			});
		});
	}
	// Робота з контентом
	function initTabs(tabsBlock) {
		let tabsTitles =
			tabsBlock.querySelectorAll('[data-tabs-titles]>*') &&
			tabsBlock.querySelectorAll('[data-tabs-titles]>*');
		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

		if (tabsActiveHashBlock) {
			const tabsActiveTitle = tabsBlock.querySelector(
				'[data-tabs-titles]>.active'
			);
			tabsActiveTitle ? tabsActiveTitle.classList.remove('active') : null;
		}
		if (tabsContent.length) {
			tabsContent = Array.from(tabsContent).filter(
				item => item.closest('[data-tabs]') === tabsBlock
			);
			tabsTitles = Array.from(tabsTitles).filter(
				item => item.closest('[data-tabs]') === tabsBlock
			);
			tabsContent.forEach((tabsContentItem, index) => {
				tabsTitles[index].setAttribute('data-tabs-title', '');
				tabsContentItem.setAttribute('data-tabs-item', '');

				if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
					tabsTitles[index].classList.add('active');
				}
				tabsContentItem.hidden =
					!tabsTitles[index].classList.contains('active');
			});
		}
	}
	function setTabsStatus(tabsBlock) {
		let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
		let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
		const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
		function isTabsAnamate(tabsBlock) {
			if (tabsBlock.hasAttribute('data-tabs-animate')) {
				return tabsBlock.dataset.tabsAnimate > 0
					? Number(tabsBlock.dataset.tabsAnimate)
					: 500;
			}
		}
		const tabsBlockAnimate = isTabsAnamate(tabsBlock);
		if (tabsContent.length > 0) {
			const isHash = tabsBlock.hasAttribute('data-tabs-hash');
			tabsContent = Array.from(tabsContent).filter(
				item => item.closest('[data-tabs]') === tabsBlock
			);
			tabsTitles = Array.from(tabsTitles).filter(
				item => item.closest('[data-tabs]') === tabsBlock
			);
			tabsContent.forEach((tabsContentItem, index) => {
				if (tabsTitles[index].classList.contains('active')) {
					if (tabsBlockAnimate) {
						_slideDown(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = false;
					}
					if (isHash && !tabsContentItem.closest('.popup')) {
						setHash(`tab-${tabsBlockIndex}-${index}`);
					}
				} else {
					if (tabsBlockAnimate) {
						_slideUp(tabsContentItem, tabsBlockAnimate);
					} else {
						tabsContentItem.hidden = true;
					}
				}
			});
		}
	}
	function setTabsAction(e) {
		const el = e.target;
		if (el.closest('[data-tabs-title]')) {
			const tabTitle = el.closest('[data-tabs-title]');
			const tabsBlock = tabTitle.closest('[data-tabs]');
			if (
				!tabTitle.classList.contains('active') &&
				!tabsBlock.querySelector('._slide')
			) {
				let tabActiveTitle = tabsBlock.querySelectorAll(
					'[data-tabs-title].active'
				);
				tabActiveTitle.length
					? (tabActiveTitle = Array.from(tabActiveTitle).filter(
							item => item.closest('[data-tabs]') === tabsBlock
					  ))
					: null;
				tabActiveTitle.length
					? tabActiveTitle[0].classList.remove('active')
					: null;
				tabTitle.classList.add('active');
				setTabsStatus(tabsBlock);
			}
			e.preventDefault();
		}
	}
}

class Popup {
	constructor(options) {
		let config = {
			logging: true,
			init: true,
			//Для кнопок
			attributeOpenButton: 'data-popup', // Атрибут для кнопки, яка викликає попап
			attributeCloseButton: 'data-close', // Атрибут для кнопки, що закриває попап
			// Для сторонніх об'єктів
			fixElementSelector: '[data-lp]', // Атрибут для елементів із лівим паддингом (які fixed)
			// Для об'єкту попапа
			youtubeAttribute: 'data-popup-youtube', // Атрибут для коду youtube
			youtubePlaceAttribute: 'data-popup-youtube-place', // Атрибут для вставки ролика youtube
			setAutoplayYoutube: true,
			// Зміна класів
			classes: {
				popup: 'popup',
				// popupWrapper: 'popup__wrapper',
				popupContent: '[data-popup-content]',
				popupActive: 'popup_show', // Додається для попапа, коли він відкривається
				bodyActive: 'popup-show', // Додається для боді, коли попап відкритий
			},
			focusCatch: true, // Фокус усередині попапа зациклений
			closeEsc: true, // Закриття ESC
			bodyLock: true, // Блокування скролла
			hashSettings: {
				location: true, // Хеш в адресному рядку
				goHash: true, // Перехід по наявності в адресному рядку
			},
			on: {
				// Події
				beforeOpen: function () {},
				afterOpen: function () {},
				beforeClose: function () {},
				afterClose: function () {},
			},
		};
		this.youTubeCode;
		this.isOpen = false;
		// Поточне вікно
		this.targetOpen = {
			selector: false,
			element: false,
		};
		// Попереднє відкрите
		this.previousOpen = {
			selector: false,
			element: false,
		};
		// Останнє закрите
		this.lastClosed = {
			selector: false,
			element: false,
		};
		this._dataValue = false;
		this.hash = false;

		this._reopen = false;
		this._selectorOpen = false;

		this.lastFocusEl = false;
		this._focusEl = [
			'a[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'area[href]',
			'iframe',
			'object',
			'embed',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"])',
		];
		//this.options = Object.assign(config, options);
		this.options = {
			...config,
			...options,
			classes: {
				...config.classes,
				...options?.classes,
			},
			hashSettings: {
				...config.hashSettings,
				...options?.hashSettings,
			},
			on: {
				...config.on,
				...options?.on,
			},
		};
		this.bodyLock = false;
		this.options.init ? this.initPopups() : null;
	}
	initPopups() {
		this.eventsPopup();
	}
	eventsPopup() {
		// Клік по всьому документі
		document.addEventListener(
			'click',
			function (e) {
				// Клік по кнопці "відкрити"
				const buttonOpen = e.target.closest(
					`[${this.options.attributeOpenButton}]`
				);
				if (buttonOpen) {
					e.preventDefault();
					this._dataValue = buttonOpen.getAttribute(
						this.options.attributeOpenButton
					)
						? buttonOpen.getAttribute(this.options.attributeOpenButton)
						: 'error';
					this.youTubeCode = buttonOpen.getAttribute(
						this.options.youtubeAttribute
					)
						? buttonOpen.getAttribute(this.options.youtubeAttribute)
						: null;
					if (this._dataValue !== 'error') {
						if (!this.isOpen) this.lastFocusEl = buttonOpen;
						this.targetOpen.selector = `${this._dataValue}`;
						this._selectorOpen = true;
						this.open();
						return;
					} else return;
				}
				// Закриття на порожньому місці (popup__wrapper) та кнопки закриття (popup__close) для закриття
				const buttonClose = e.target.closest(
					`[${this.options.attributeCloseButton}]`
				);
				if (
					buttonClose ||
					(!e.target.closest(`${this.options.classes.popupContent}`) &&
						this.isOpen)
				) {
					e.preventDefault();
					this.close();
					return;
				}
			}.bind(this)
		);
		// Закриття ESC
		document.addEventListener(
			'keydown',
			function (e) {
				if (
					this.options.closeEsc &&
					e.which == 27 &&
					e.code === 'Escape' &&
					this.isOpen
				) {
					e.preventDefault();
					this.close();
					return;
				}
				if (this.options.focusCatch && e.which == 9 && this.isOpen) {
					this._focusCatch(e);
					return;
				}
			}.bind(this)
		);

		// Відкриття по хешу
		if (this.options.hashSettings.goHash) {
			// Перевірка зміни адресного рядка
			window.addEventListener(
				'hashchange',
				function () {
					if (window.location.hash) {
						this._openToHash();
					} else {
						this.close(this.targetOpen.selector);
					}
				}.bind(this)
			);

			window.addEventListener(
				'load',
				function () {
					if (window.location.hash) {
						this._openToHash();
					}
				}.bind(this)
			);
		}
	}
	open(selectorValue) {
		if (bodyLockStatus) {
			// Якщо перед відкриттям попапа був режим lock
			this.bodyLock =
				document.documentElement.classList.contains('lock') && !this.isOpen
					? true
					: false;

			// Якщо ввести значення селектора (селектор настроюється в options)
			if (
				selectorValue &&
				typeof selectorValue === 'string' &&
				selectorValue.trim() !== ''
			) {
				this.targetOpen.selector = selectorValue;
				this._selectorOpen = true;
			}
			if (this.isOpen) {
				this._reopen = true;
				this.close();
			}
			if (!this._selectorOpen)
				this.targetOpen.selector = this.lastClosed.selector;
			if (!this._reopen) this.previousActiveElement = document.activeElement;

			this.targetOpen.element = document.querySelector(
				this.targetOpen.selector
			);

			if (this.targetOpen.element) {
				// YouTube
				if (this.youTubeCode) {
					const codeVideo = this.youTubeCode;
					const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
					const iframe = document.createElement('iframe');
					iframe.setAttribute('allowfullscreen', '');

					const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
					iframe.setAttribute('allow', `${autoplay}; encrypted-media`);

					iframe.setAttribute('src', urlVideo);

					if (
						!this.targetOpen.element.querySelector(
							`[${this.options.youtubePlaceAttribute}]`
						)
					) {
						const youtubePlace = this.targetOpen.element
							.querySelector('.popup__text')
							.setAttribute(`${this.options.youtubePlaceAttribute}`, '');
					}
					this.targetOpen.element
						.querySelector(`[${this.options.youtubePlaceAttribute}]`)
						.appendChild(iframe);
				}
				if (this.options.hashSettings.location) {
					// Отримання хешу та його виставлення
					this._getHash();
					this._setHash();
				}

				// До відкриття
				this.options.on.beforeOpen(this);
				// Створюємо свою подію після відкриття попапа
				document.dispatchEvent(
					new CustomEvent('beforePopupOpen', {
						detail: {
							popup: this,
						},
					})
				);

				this.targetOpen.element.classList.add(this.options.classes.popupActive);
				document.documentElement.classList.add(this.options.classes.bodyActive);

				if (!this._reopen) {
					!this.bodyLock ? bodyLock() : null;
				} else this._reopen = false;

				this.targetOpen.element.setAttribute('aria-hidden', 'false');

				// Запам'ятаю це відчинене вікно. Воно буде останнім відкритим
				this.previousOpen.selector = this.targetOpen.selector;
				this.previousOpen.element = this.targetOpen.element;

				this._selectorOpen = false;

				this.isOpen = true;

				setTimeout(() => {
					this._focusTrap();
				}, 50);

				// Після відкриття
				this.options.on.afterOpen(this);
				// Створюємо свою подію після відкриття попапа
				document.dispatchEvent(
					new CustomEvent('afterPopupOpen', {
						detail: {
							popup: this,
						},
					})
				);
			}
		}
	}
	close(selectorValue) {
		if (
			selectorValue &&
			typeof selectorValue === 'string' &&
			selectorValue.trim() !== ''
		) {
			this.previousOpen.selector = selectorValue;
		}
		if (!this.isOpen || !bodyLockStatus) {
			return;
		}
		// До закриття
		this.options.on.beforeClose(this);
		// Створюємо свою подію перед закриттям попапа
		document.dispatchEvent(
			new CustomEvent('beforePopupClose', {
				detail: {
					popup: this,
				},
			})
		);

		// YouTube
		if (this.youTubeCode) {
			if (
				this.targetOpen.element.querySelector(
					`[${this.options.youtubePlaceAttribute}]`
				)
			)
				this.targetOpen.element.querySelector(
					`[${this.options.youtubePlaceAttribute}]`
				).innerHTML = '';
		}
		this.previousOpen.element.classList.remove(
			this.options.classes.popupActive
		);
		// aria-hidden
		this.previousOpen.element.setAttribute('aria-hidden', 'true');
		if (!this._reopen) {
			document.documentElement.classList.remove(
				this.options.classes.bodyActive
			);
			!this.bodyLock ? bodyUnlock() : null;
			this.isOpen = false;
		}
		// Очищення адресного рядка
		this._removeHash();
		if (this._selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector;
			this.lastClosed.element = this.previousOpen.element;
		}
		// Після закриття
		this.options.on.afterClose(this);
		// Створюємо свою подію після закриття попапа
		document.dispatchEvent(
			new CustomEvent('afterPopupClose', {
				detail: {
					popup: this,
				},
			})
		);

		setTimeout(() => {
			this._focusTrap();
		}, 50);
	}
	// Отримання хешу
	_getHash() {
		if (this.options.hashSettings.location) {
			this.hash = this.targetOpen.selector.includes('#')
				? this.targetOpen.selector
				: this.targetOpen.selector.replace('.', '#');
		}
	}
	_openToHash() {
		let classInHash = document.querySelector(
			`.${window.location.hash.replace('#', '')}`
		)
			? `.${window.location.hash.replace('#', '')}`
			: document.querySelector(`${window.location.hash}`)
			? `${window.location.hash}`
			: null;

		const buttons = document.querySelector(
			`[${this.options.attributeOpenButton} = "${classInHash}"]`
		)
			? document.querySelector(
					`[${this.options.attributeOpenButton} = "${classInHash}"]`
			  )
			: document.querySelector(
					`[${this.options.attributeOpenButton} = "${classInHash.replace(
						'.',
						'#'
					)}"]`
			  );

		this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute)
			? buttons.getAttribute(this.options.youtubeAttribute)
			: null;

		if (buttons && classInHash) this.open(classInHash);
	}
	// Встановлення хеша
	_setHash() {
		history.pushState('', '', this.hash);
	}
	_removeHash() {
		history.pushState('', '', window.location.href.split('#')[0]);
	}
	_focusCatch(e) {
		const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}
		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}
	_focusTrap() {
		const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
		if (!this.isOpen && this.lastFocusEl) {
			this.lastFocusEl.focus();
		} else {
			focusable[0].focus();
		}
	}
}

if (document.querySelector('.seache-header__btn-popup')) {
	document.addEventListener('afterPopupOpen', function (e) {
		if ('#popup-seache' === e.detail.popup._dataValue) {
			document
				.querySelector('.seache-header__btn-popup')
				.classList.add('hidden');
		}
	});
	document.addEventListener('afterPopupClose', function (e) {
		if ('#popup-seache' === e.detail.popup._dataValue) {
			document
				.querySelector('.seache-header__btn-popup')
				.classList.remove('hidden');
		}
	});
}

function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
	}
	// Додавання класу _webp або _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
};
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]');
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			document.documentElement.classList.remove('lock');
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};
let bodyLock = (delay = 500) => {
	let body = document.querySelector('body');
	if (bodyLockStatus) {
		let lock_padding = document.querySelectorAll('[data-lp]');
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight =
				window.innerWidth -
				document.querySelector('.wrapper').offsetWidth +
				'px';
		}
		body.style.paddingRight =
			window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		document.documentElement.classList.add('lock');

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
};

function getHash() {
	if (location.hash) {
		return location.hash.replace('#', '');
	}
}
// Вказівка хеша на адресу сайту
function setHash(hash) {
	hash = hash ? `#${hash}` : window.location.href.split('#')[0];
	history.pushState('', '', hash);
}

let _slideUp = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = !showmore ? true : false;
			!showmore ? target.style.removeProperty('height') : null;
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			!showmore ? target.style.removeProperty('overflow') : null;
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію
			document.dispatchEvent(
				new CustomEvent('slideUpDone', {
					detail: {
						target: target,
					},
				})
			);
		}, duration);
	}
};
let _slideDown = (target, duration = 500, showmore = 0) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		showmore ? target.style.removeProperty('height') : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = showmore ? `${showmore}px` : `0px`;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію
			document.dispatchEvent(
				new CustomEvent('slideDownDone', {
					detail: {
						target: target,
					},
				})
			);
		}, duration);
	}
};
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
};

function dataMediaQueries(array, dataSetValue) {
	// Отримання об'єктів з медіа-запитами
	const media = Array.from(array).filter(function (item, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(',')[0];
		}
	});
	// Ініціалізація об'єктів з медіа-запитами
	if (media.length) {
		const breakpointsArray = [];
		media.forEach(item => {
			const params = item.dataset[dataSetValue];
			const breakpoint = {};
			const paramsArray = params.split(',');
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Отримуємо унікальні брейкпоінти
		let mdQueries = breakpointsArray.map(function (item) {
			return (
				'(' +
				item.type +
				'-width: ' +
				item.value +
				'px),' +
				item.value +
				',' +
				item.type
			);
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray = [];

		if (mdQueries.length) {
			// Працюємо з кожним брейкпоінтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(',');
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Об'єкти з потрібними умовами
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia,
				});
			});
			return mdQueriesArray;
		}
	}
}

let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}

function formAnim(input) {
	let value = input.value;

	if ( value != '' ) {
		input.closest('.form__line').classList.add('_full')
	} else {
		input.closest('.form__line').classList.remove('_full')
	}
}