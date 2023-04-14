
const container = document.querySelector('.swiper-wrapper');

function addPastEvents() {
    const eventosPasados = eventos.eventos.filter(evento => new Date(evento.date).getTime() < fechaActualTimestamp);
    for (let i = 0; i < eventosPasados.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide")
        let CardImage = eventosPasados[i].image;
        let CardName = eventosPasados[i].name;
        let CardDescription = eventosPasados[i].description;
        let CardPrice = eventosPasados[i].price;
        const pastEventCard=createCardDiv(CardImage, CardName, CardDescription, CardPrice,
            eventos.eventos[i].date, eventos.eventos[i].category, eventos.eventos[i].place, eventos.eventos[i].capacity, 
            eventos.eventos[i].assistance || eventos.eventos[i].estimate);
        slide.appendChild(pastEventCard);
        container.appendChild(slide);
    }
}
addPastEvents();

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

// document.querySelector("input[type=checkbox]").addEventListener("click",categoryFilter());

// //crear una funcion como desde el addli se puede obtener el value del 
// function categoryFilter(event){

// console.log("event"+event);
// }