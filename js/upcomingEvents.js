
const eventsUpcoming = eventos.eventos.filter(evento => new Date(evento.date).getTime() > fechaActualTimestamp);

insertCategory();
addEventsCheckbox(eventsUpcoming);
insertCards(eventsUpcoming);

filterButton.addEventListener('click', () => { validateEmptyList(eventsUpcoming) });

let swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 100,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        520: { slidesPerView: 2, slidesPerGroup: 2 },
        950: { slidesPerView: 4, slidesPerGroup: 4 },
    },
});