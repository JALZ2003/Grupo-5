
insertCategory();
addEventsCheckbox(eventsPast, 'past');
insertCards(eventsPast, 'past');

filterButton.addEventListener('click', () => { validateEmptyList(eventsPast, 'past') });

let swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        540: {slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 40},
        820: {slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 40},
        1240: {slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40},
    }
});
