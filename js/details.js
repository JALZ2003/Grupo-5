
createDetails();

async function createDetails() {
    let id = JSON.parse(sessionStorage.getItem('id'));
    let card = await fetch(`https://pro-talento.up.railway.app/api/amazing/${id}`).then(response => response.json()).then(data => data.response);
    let assistance;
    if ("assistance" in card) {
        assistance = "Assistance: " + card.assistance;
    } else {
        assistance = "Estimate: " + card.estimate;
    }
    setDetails(card.image, card.name, card.date, card.description, card.category, card.place, card.capacity, assistance, card.price);
}