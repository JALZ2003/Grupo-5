let urlhome = "https://pro-talento.up.railway.app/api/amazing";

fetchApi(urlhome,"home");

let swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    grabCursor: 'true',
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        540: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 40 },
        820: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 40 },
        1240: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 40 },
    }
});