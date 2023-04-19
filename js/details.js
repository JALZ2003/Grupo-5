
createDetails();

function createDetails() {
    let id = JSON.parse(sessionStorage.getItem('id'));
    let card = eventos.eventos.find(event => id == event.id);
    console.log(card);
    let assistance;
    if ("assistance" in card) {
        assistance = "Assistance: " + card.assistance;
    } else {
        assistance = "Estimate: " + card.estimate;
    }
    setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, assistance, card.price);
}