
createDetails();

function createDetails() {
    let id = sessionStorage.getItem('id');
    let idPage = id.split('-');
    let position = Number(idPage[0]);
    let page = idPage[1];
    if (page == 'home') {
        let card = eventos.eventos[position];
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, card.assistance || card.estimate, card.price);
    } else if (page == 'past') {
        let card = eventsPast[position];
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, card.assistance || card.estimate, card.price);
    } else if (page == 'upcoming') {
        let card = eventsUpcoming[position];
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, card.assistance || card.estimate, card.price);
    }
}