
const container = document.querySelector('.swiper-wrapper');

function addHomeEvents() {
    for (let i = 0; i < eventos.eventos.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide");
        let CardImage = eventos.eventos[i].image;
        let CardName = eventos.eventos[i].name;
        let CardDescription = eventos.eventos[i].description;
        let CardPrice = eventos.eventos[i].price;
        const homeEvents = createCardDiv(CardImage, CardName, CardDescription, CardPrice,
            eventos.eventos[i].date, eventos.eventos[i].category, eventos.eventos[i].place, eventos.eventos[i].capacity, 
            eventos.eventos[i].assistance || eventos.eventos[i].estimate);
        slide.appendChild(homeEvents);
        container.appendChild(slide);
    }
}

addHomeEvents();

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