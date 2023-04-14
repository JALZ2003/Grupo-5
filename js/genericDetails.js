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

function createCardDivDetails(cardImage, cardName, cardDate, cardDescription, cardCategory, cardPlace, cardCapacity, cardAssistance, CardPrice) {
    //card general para details
    const container = document.createElement('div');
    const row = document.createElement('div');
    const col1 = document.createElement('div');
    const img1 = document.createElement('img');
    const col2 = document.createElement('div');
    const img2 = document.createElement('img');
    const containerText = document.createElement('div');
    const title = document.createElement('h2');
    const date = document.createElement('h6');
    const description = document.createElement('h6');
    const category = document.createElement('h6');
    const place = document.createElement('h6');
    const capacity = document.createElement('h6');
    const assistenceOrEstimate = document.createElement('h6');
    const price = document.createElement('h6');

    //agrega clases
    container.classList.add('container', 'd-flex', 'justify-content-center', 'mt-5', 'p-5');
    row.classList.add('row');
    col1.classList.add('col-md-6', 'd-flex', 'justify-content-center');
    img1.classList.add('img-fluid', 'img-1');
    col2.classList.add('col-md-6', 'position-relative', 'd-flex', 'text-left', 'justify-content-center');
    img2.classList.add('img-fluid');
    containerText.classList.add('position-absolute', 'top-1', 'start-2', 'container-text');
    title.classList.add('card-title', 'title', 'text-center');
    date.classList.add('card-title', 'title');
    description.classList.add('card-title', 'title');
    category.classList.add('card-title', 'title');
    place.classList.add('card-title', 'title');
    capacity.classList.add('card-title', 'title');
    assistenceOrEstimate.classList.add('card-title', 'title');
    price.classList.add('card-title', 'title');

    // se agrego  los atributos que contenian las etiquetas en el html
    img1.alt = 'Imagen 1';
    img1.src = cardImage;
    img2.alt = 'Imagen 2';
    img2.src = '../assets/Images/imageDatails.png';
    title.textContent = cardName;
    date.textContent = 'DATE: ' + cardDate;
    description.textContent = 'DESCRIPTION: ' + cardDescription;
    category.textContent = 'CATEGORY: ' + cardCategory;
    place.textContent = 'PLACE: ' + cardPlace;
    capacity.textContent = 'CAPACITY: ' + cardCapacity;
    assistenceOrEstimate.textContent = 'ASSISTENCE OR ESTIMATE: ' + cardAssistance;
    price.textContent = 'PRICE: ' + CardPrice;

    //contenido de los atributos
    col1.appendChild(img1);
    containerText.appendChild(title);
    containerText.appendChild(date);
    containerText.appendChild(description);
    containerText.appendChild(category);
    containerText.appendChild(place);
    containerText.appendChild(capacity);
    containerText.appendChild(assistenceOrEstimate);
    containerText.appendChild(price);
    col2.appendChild(img2);
    col2.appendChild(containerText);
    row.appendChild(col1);
    row.appendChild(col2);
    container.appendChild(row);

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(container);

}

function createDetails() {
    let imagen = JSON.parse(sessionStorage.getItem('imagen'));
    let nombre = JSON.parse(sessionStorage.getItem('nombre'));
    let descripcion = JSON.parse(sessionStorage.getItem('descripcion'));
    let precio = JSON.parse(sessionStorage.getItem('precio'));
    let date = JSON.parse(sessionStorage.getItem('date'));
    let category = JSON.parse(sessionStorage.getItem('category'));
    let place = JSON.parse(sessionStorage.getItem('place'));
    let capacity = JSON.parse(sessionStorage.getItem('capacity'));
    let asistance = JSON.parse(sessionStorage.getItem('asistance'));
    createCardDivDetails(imagen, nombre, date, descripcion, category, place, capacity, asistance, precio);
}

createDetails();
