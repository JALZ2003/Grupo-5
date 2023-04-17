
insertCategory();
addEventsCheckbox(soloEventos, 'home');
insertCards(soloEventos, 'home');

filterButton.addEventListener('click', () => { validateEmptyList(soloEventos, 'home') });

let swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        750: { slidesPerView: 2, slidesPerGroup: 2 },
        1014: { slidesPerView: 3, slidesPerGroup: 3 },
        1350: { slidesPerView: 4, slidesPerGroup: 4 },
    },
});
