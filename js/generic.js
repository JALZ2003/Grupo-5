const search = document.querySelector('#search');
const filterButton = document.querySelector('#filter');
const containerCards = document.querySelector('.swiper-wrapper');
const containerSlide = document.querySelector('.slide-container');
const containerMensaje = document.querySelector('.mensaje');

const eventos = {
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image": "../assets/Images/partys.jpeg",
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
            "image": "../assets/Images/Feriadecomidas7.jpg",
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
            "image": "../assets/Images/Salidaalmuseo5.jpg",
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
            "image": "../assets/Images/museum.jpeg",
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
            "image": "../assets/Images/comic-con.jpeg",
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
            "image": "../assets/Images/Fiestadedisfraces1.jpg",
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
            "image": "../assets/Images/Conciertodemusica1.jpg",
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
            "image": "../assets/Images/dj.jpeg",
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
            "image": "../assets/Images/Maraton3.jpg",
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
            "image": "../assets/Images/maraton1.jpeg",
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
            "image": "../assets/Images/books.jpeg",
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
            "image": "../assets/Images/cook.jpeg",
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
            "image": "../assets/Images/batman.webp",
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
            "image": "../assets/Images/marvel.jpeg",
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
function createCard(image, name, description, price, id, page) {
    return `<div class="card h-100">
                <img src="${image}" class="card-img-top imgcard" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${description}</p>
                </div>
                <div class="card-footer bg-transparent d-flex justify-content-between flex-wrap text-center">
                    <small class="card-text mt-2 mb-2 ms-1">Price: ${price}</small>
                    <a id="${id}-${page}" href="details.html" class="btn btn-primary button-Shadow me-1" onclick="saveId(id)">Details</a>
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
    dateElement.textContent = date;
    descriptionElement.textContent = description;
    categoryElement.textContent = category;
    placeElement.textContent = place;
    capacityElement.textContent = capacity;
    assistanceElement.textContent = assistance;
    priceElement.textContent = price;
}

function saveId(id) {
    sessionStorage.setItem('id', id);
}

function insertCards(list, page) {
    removeElements();
    for (let i = 0; i < list.length; i++) {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide");
        const card = createCard(list[i].image, list[i].name, list[i].description, list[i].price, i, page);
        slide.innerHTML += card;
        containerCards.appendChild(slide);
    }
}

function removeElements() {
    containerCards.innerHTML = '';
    containerMensaje.innerHTML = '';
}

function validateEmptyList(list, page) {
    removeElements();
    if (filters(list).length != 0) {
        containerSlide.style.display = "block"
        insertCards(filters(list), page);
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

function addEventsCheckbox(list, page) {
    const allChecks = document.querySelectorAll(".form-check-input");
    allChecks.forEach(f => f.addEventListener('change', () => { validateEmptyList(list, page) }));
}

function filterSearch(list) {
    return list.filter(element => wordSearch(search.value, element));
}

const toLowerWords = (word) => { return word.toLowerCase(); };

const wordSearch = (word, title) => { return toLowerWords(title.name).includes(toLowerWords(word)); };