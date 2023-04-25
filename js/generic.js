const containerCards = document.querySelector('.swiper-wrapper');
const containerSlide = document.querySelector('.slide-container');
const containerMensaje = document.querySelector('.mensaje');

// Crear las etiquetas correspondientes de Events.html
function createCard(image, name, description, price, id) {
    return `<div class="card h-100">
                <img src="${image}" class="card-img-top imgcard" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-between flex-wrap text-center">
                    <small class="card-text mt-2 mb-2 ms-1">Price: ${price}</small>
                    <a id="${id}" href="details.html" class="btn btn-primary button-Shadow me-1" onclick="saveId(id)">Details</a>
                </div>
            </div>`
}

function setDetails(image, name, date, description, category, place, capacity, assistance, price) {
    document.getElementById('detail').innerHTML = `
    <div class="row">
        <div class="col-0"></div>
        <div class="col-xl-6 col-lg-6 text-center bg-body-secondary p-4">
            <img src="${image}" class="rounded h-100 sombradetails imgdetail" alt="${name}" />
        </div>
        <div class="col-xl-6 col-lg-6 text-center d-flex flex-column justify-content-center bg-body-secondary p-4">
            <h3> ${name} </h3>
            <br />
            <p class="fs-5 text-start"> Date: ${date} </p>
            <p class="fs-5 text-start"> Description: ${description} </p>
            <p class="fs-5 text-start"> Category: ${category} </p>
            <p class="fs-5 text-start"> Place: ${place} </p>
            <p class="fs-5 text-start"> Capacity: ${capacity} </p>
            <p class="fs-5 text-start"> ${assistance} </p>
            <p class="fs-5 text-start"> Price: ${price} </p>
        </div>
        <div class="col-0"></div>
    </div>`
}

function saveId(id) {
    sessionStorage.setItem('id', JSON.stringify(id));
}

async function insertCards(list) {
    removeElements();
    list = await list;
    for (let i = 0; i < list.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide");
        const card = createCard(list[i].image, list[i].name, list[i].description, list[i].price, list[i].id);
        slide.innerHTML += card;
        containerCards.appendChild(slide);
    }
}

function removeElements() {
    containerCards.innerHTML = '';
    containerMensaje.innerHTML = '';
}

function insertCategory(list, pagina) {
    const categoriasEventos = [...new Set(list.map(r => r.category))];
    categoriasEventos.forEach(r => {
        let check = document.createElement('div');
        check.className = "form-check form-check-inline"
        check.innerHTML = `<input class="form-check-input" type="checkbox" id="${r}" value="${r}">
                           <label class="form-check-label" for="${r}">${r}</label>`
        checksHome.appendChild(check)
    });
    const allChecks = document.querySelectorAll(".form-check-input");
    allChecks.forEach(f => f.addEventListener('change', () => { filterData(pagina) }));
}

async function fetchApi(url, pagina) {
    try {
        let response = await fetch(url);
        response = await response.json();
        insertCategory(response.response, pagina);
        insertCards(response.response);
        document.getElementById("filter").addEventListener('click', () => { filterData(pagina) });
    } catch (error) {
        console.log(error);
    }
}

async function filterData(pagina) {
    try {
        let texto = document.getElementById("search").value.toLowerCase().trim();
        let categorias = [...document.querySelectorAll(".form-check-input:checked")].map(each => each.value).join(',');
        let url = `https://pro-talento.up.railway.app/api/amazing?time=${pagina}&name=${texto}&category=${categorias}`;
        let response = await fetch(url);
        response = await response.json();
        removeElements();
        if (response.response.length != 0) {
            containerSlide.style.display = "block";
            insertCards(response.response);
            return;
        }
        let div = document.createElement('div');
        div.classList.add('emptyEvents');
        div.textContent = 'No existe el evento';
        containerSlide.style.display = "none";
        containerMensaje.appendChild(div);
    } catch (error) {
        console.log(error);
    }
}