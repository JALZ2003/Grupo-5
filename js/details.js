
createDetails();

function createDetails() {
    let id = sessionStorage.getItem('id');
    let idPage = id.split('-');
    let position = Number(idPage[0]);
    let page = idPage[1];
    if (page == 'home') {
        let card = eventos.eventos[position];
        let assistance;
        if ("assistance" in card){
            assistance = "Assistance: " + card.assistance;
        } else {
            assistance = "Estimate: " + card.estimate;
        }
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, assistance, card.price);
    } else if (page == 'past') {
        let card = eventsPast[position];
        let assistance = "Assistance: " + card.assistance;
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, assistance, card.price);
    } else if (page == 'upcoming') {
        let card = eventsUpcoming[position];
        let estimate = "Estimate: " + card.estimate;
        setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, estimate, card.price);
    }
}