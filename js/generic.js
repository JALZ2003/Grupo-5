const search = document.querySelector('#search');
const filterButton = document.querySelector('#filter');
const containerCards = document.querySelector('.swiper-wrapper');
const containerSlide = document.querySelector('.slide-container');
const containerMensaje = document.querySelector('.mensaje');

const eventos = {
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "id": 1,
            "image": "https://www.eldiadeescobar.com.ar/wp-content/uploads/2017/11/sdb.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            "id": 2,
            "image": "https://www.lanacion.com.py/resizer/3Olmybc9r8w6t6xEdBO1863w-28=/1016x0/smart/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionpy/EIX4HKVHHFBGFM4VA5XVNROEMM.jpg",
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            "id": 3,
            "image": "https://viajes.nationalgeographic.com.es/medio/2018/06/29/museo-de-historia-natural-de-ny_deb4505f.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            "id": 4,
            "image": "https://www.wendyperrin.com/wp-content/uploads/2016/11/Paris-Louvre-at-night-Pixabay.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            "id": 5,
            "image": "https://cdn.latinus.us/wp-content/uploads/2021/07/22133457/comic-con-convention-shutterstock.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            "id": 6,
            "image": "https://images.ctfassets.net/iyiurthvosft/3ROdOB8u2v0URWeS9r1fLa/6859a1b8d645e4d616766b82a9516532/iStock-852785062.jpg?fm=jpg&fl=progressive&q=50&w=1200",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            "id": 7,
            "image": "https://i.ytimg.com/vi/_TjDcibhdEE/maxresdefault.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            "id": 8,
            "image": "https://scenenoise.com/Content/Articles/Big_image/a9f397a3-b2f6-474f-bef6-07db1fd09bf6.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            "id": 9,
            "image": "https://runningmagazine.ca/wp-content/uploads/2019/05/Sporting-Life-10K-2019-first-wave-start-e1557778045155.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Campo de FutbÃ³l",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            "id": 10,
            "image": "https://img2.rtve.es/i/?w=1600&i=1667477734860.jpg",
            "name": "15K NY",
            "date": "2021-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            "id": 11,
            "image": "https://api.army.mil/e2/c/images/2016/10/05/452954/original.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            "id": 12,
            "image": "https://i0.wp.com/sabordelobueno.com/wp-content/uploads/2018/03/libros-cocina-sabores-mundo.jpg?fit=1200%2C800&ssl=1",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            "id": 13,
            "image": "https://cdn.colombia.com/sdi/2022/03/03/estrenos-cartelera-cine-colombia-3-de-marzo-the-batman-1003722-1.webp",
            "name": "Batman",
            "date": "2021-3-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            "id": 14,
            "image": "https://store-images.s-microsoft.com/image/apps.10533.13626322972562259.ff8154ff-8879-4362-a212-b58af6747a95.3c212a21-e36b-4ffd-b6bb-e23264223602?q=90&w=480&h=270",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
}

let soloEventos = eventos.eventos;

const fechaActualTimestamp = new Date('2022-01-01').getTime();
const eventsPast = eventos.eventos.filter(evento => new Date(evento.date).getTime() < fechaActualTimestamp);
const eventsUpcoming = eventos.eventos.filter(evento => new Date(evento.date).getTime() > fechaActualTimestamp);

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
    let imageElement = document.getElementById('image');
    let nameElement = document.getElementById('name');
    let dateElement = document.getElementById('date');
    let descriptionElement = document.getElementById('description');
    let categoryElement = document.getElementById('category');
    let placeElement = document.getElementById('place');
    let capacityElement = document.getElementById('capacity');
    let assistanceElement = document.getElementById('assistance');
    let priceElement = document.getElementById('price');

    imageElement.src = image;
    nameElement.textContent = name;
    dateElement.textContent = "Date: " + date;
    descriptionElement.textContent = "Description: " + description;
    categoryElement.textContent = "Category: " + category;
    placeElement.textContent = "Place: " + place;
    capacityElement.textContent = "Capacity: " + capacity;
    assistanceElement.textContent = assistance;
    priceElement.textContent = "Price: " + price;
}

function saveId(id) {
    sessionStorage.setItem('id', JSON.stringify(id));
}

function insertCards(list) {
    removeElements();
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

function validateEmptyList(list) {
    removeElements();
    if (filters(list).length != 0) {
        containerSlide.style.display = "block";
        insertCards(filters(list));
        return;
    }
    let div = document.createElement('div');
    div.classList.add('emptyEvents');
    div.textContent = 'No existe el evento';
    containerSlide.style.display = "none"
    containerMensaje.appendChild(div);
}

function filters(list) {
    return filterSearch(filtrarCheckBox(list));
}

function filtrarCheckBox(list) {
    const allChecks = document.querySelectorAll(".form-check-input");
    const valores = [...allChecks].filter(f => f.checked).map(f => f.value);
    if (valores.length === 0) {
        return list;
    } else {
        return eventosFiltrados = list.filter(e => {
            const categorias = e.category.split(', ');
            return categorias.some(c => valores.includes(c));
        });
    }
}

function insertCategory() {
    const categoriasEventos = [...new Set(eventos.eventos.map(r => r.category))];

    categoriasEventos.forEach(r => {
        const checksHome = document.getElementById("checksHome")
        let check = document.createElement('div');
        check.className = "form-check form-check-inline"
        check.innerHTML = `<input class="form-check-input" type="checkbox" id="${r}" value="${r}">
                           <label class="form-check-label" for="${r}">${r}</label>`
        checksHome.appendChild(check)
    });
}

function addEventsCheckbox(list) {
    const allChecks = document.querySelectorAll(".form-check-input");
    allChecks.forEach(f => f.addEventListener('change', () => { validateEmptyList(list); }));
}

function filterSearch(list) {
    return list.filter(element => wordSearch(search.value, element));
}

const toLowerWords = (word) => { return word.toLowerCase(); };

const wordSearch = (word, title) => { return toLowerWords(title.name).includes(toLowerWords(word)); };