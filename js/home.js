
const container = document.querySelector('.swiper-wrapper');

function addHomeEvents() {
    container.innerHTML = '';
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

const categoriasEventos = [...new Set(eventos.eventos.map(r => r.category))]

categoriasEventos.forEach(r => {
    const checksHome = document.getElementById("checksHome")
    let check = document.createElement('div');
    check.className = "form-check form-check-inline"
    check.innerHTML = `
    <input class="form-check-input" type="checkbox" id="${r}" value="${r}">
    <label class="form-check-label" for="${r}">${r}</label>
          `
    checksHome.appendChild(check)
});


let soloEventos = eventos.eventos
const allChecks = document.querySelectorAll(".form-check-input")

allChecks.forEach(e => {
    let check = document.getElementById(e.id)
        
    check.addEventListener("change", function () {
    
        if(check.checked) {
            eventos.eventos = filtroCheck(eventos.eventos, e.id)
            addHomeEvents();
            console.log("Se activó")
          } else {
            eventos.eventos = soloEventos
            addHomeEvents();
            console.log("Se desactivó")
          }
    })
    console.log(e.id)
})

function filtroCheck(array,categoria) {
    return array.filter(n=> n.category == categoria)
}

// let check1 = document.getElementById("Food Fair")

// check1.addEventListener("change", function () {
    
//     if(check1.checked) {
//         eventos.eventos = filtroCheck(eventos.eventos,"Food Fair")
//         addHomeEvents();
//         console.log("Se activó")
//       } else {
//         eventos.eventos = soloEventos
//         addHomeEvents();
//         console.log("Se desactivó")
//       }
// })

