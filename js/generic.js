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

const fechaActualTimestamp = new Date('2022-01-01').getTime();

// Crear las etiquetas correspondientes de Events.html
function createCardDiv(CardImage, CardName, CardDescription, CardPrice, cardDate, cardCategory, cardPlace, cardCapacity, cardAssistance) {
    const cardDiv = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardBody = document.createElement('div');
    const title = document.createElement('h5');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const detailsLink = document.createElement('a');

    // Agregar las clases que tienen las etiquetas en el html principal
    cardDiv.classList.add('card-body', 'd-flex', 'justify-content-around', 'pt-5', 'flex-wrap', 'mb-5');
    card.classList.add('card');
    img.classList.add('image-card', 'card-img-top', 'p-3', 'shadow');
    cardBody.classList.add('card-body');
    title.classList.add('card-title', 'text-center');
    description.classList.add('card-text', 'w-80', 'p-1');
    detailsLink.classList.add('btn', 'btn-primary', 'button-Shadow');
    detailsLink.addEventListener('click', () => { 
        sessionStorage.setItem('imagen', JSON.stringify(CardImage));
        sessionStorage.setItem('nombre', JSON.stringify(CardName));
        sessionStorage.setItem('descripcion', JSON.stringify(CardDescription));
        sessionStorage.setItem('precio', JSON.stringify(CardPrice));
        sessionStorage.setItem('date', JSON.stringify(cardDate));
        sessionStorage.setItem('category', JSON.stringify(cardCategory));
        sessionStorage.setItem('place', JSON.stringify(cardPlace));
        sessionStorage.setItem('capacity', JSON.stringify(cardCapacity));
        sessionStorage.setItem('asistance', JSON.stringify(cardAssistance));
        window.location.href = '../pages/details.html';
    });

    // se agrego  los atributos que contenian las etiquetas en el html
    card.style.width = "18rem";
    img.src = CardImage;
    img.alt = 'weddings';
    title.textContent = CardName;
    description.textContent = CardDescription;
    price.textContent = `Price: ${CardPrice}`;
    detailsLink.href = './details.html';
    detailsLink.textContent = 'Details';

    // Construir la tarjeta de bodas
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(detailsLink);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    return cardDiv;
}

