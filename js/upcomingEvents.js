const container= document.querySelector('.swiper-wrapper');
function addFutureEvents() {
    const eventosFuturos = eventos.eventos.filter(evento => new Date(evento.date).getTime() > fechaActualTimestamp);
    for (let i = 0; i < eventosFuturos.length; i++) {
        const slider = document.createElement("div");
        slider.classList.add("swiper-slide");
        let CardImage = eventosFuturos[i].image;
        let CardName = eventosFuturos[i].name;
        let CardDescription = eventosFuturos[i].description;
        let CardPrice = eventosFuturos[i].price;
        const futureEventCard=createCardDiv(CardImage, CardName, CardDescription, CardPrice,
            eventos.eventos[i].date, eventos.eventos[i].category, eventos.eventos[i].place, eventos.eventos[i].capacity, 
            eventos.eventos[i].assistance || eventos.eventos[i].estimate);
        slider.appendChild(futureEventCard);
        container.appendChild(slider);
    }
}
addFutureEvents();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 100,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        520: { slidesPerView: 2, slidesPerGroup: 2 },
        950: { slidesPerView: 4, slidesPerGroup: 4 },
    },
});