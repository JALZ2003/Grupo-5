const dataUpcoming = document.querySelector('.dataUpcoming');
const dataPast = document.querySelector('.dataPast');
const dataEvents = document.querySelector('.dataEvents');
const urlPast = 'https://pro-talento.up.railway.app/api/amazing?time=past';
const urlUpcoming = 'https://pro-talento.up.railway.app/api/amazing?time=upcoming';

loadData(urlPast, dataPast);
loadData(urlUpcoming, dataUpcoming);
load();

async function loadData(list, container) {
    list = await fetch(list).then(response => response.json()).then(data => data.response);
    let categorys = [...new Set(list.map(event => event.category))]
    categorys.forEach((category, i) => {
        let eventsBooks = list.filter(event => event.category === category);
        let percentage = Number((eventsBooks.map(event => ('assistance' in event) ? event.assistance : event.estimate)
            .reduce((acumulado, acutal) => acumulado + acutal) / eventsBooks.map(event => event.capacity)
                .reduce((acumulado, actual) => acumulado + actual)) * 100).toFixed(0);
        let revenues = eventsBooks.map(event => { return event.price * ('assistance' in event) ? event.assistance : event.estimate })
            .reduce((acumulado, actual) => acumulado + actual);
        container.innerHTML += `<tr>
                                    <td>${category}</td>
                                    <td>${Number(revenues).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                    <td> ${percentage}%</td>
                                </tr>`;
    });
}

async function load() {
    let events = await fetch('https://pro-talento.up.railway.app/api/amazing').then(response => response.json()).then(data => data.response);
    let eventPast = await fetch(urlPast).then(response => response.json()).then(data => data.response);
    let percentage = eventPast.map(event => { return { name: event.name, percentage: (event.assistance / event.capacity) * 100 } });
    let highest = percentage.reduce((acumulado, actual) => (acumulado.percentage >= actual.percentage ? acumulado : actual), percentage[0]);
    let lowest = percentage.reduce((acumulado, actual) => (acumulado.percentage <= actual.percentage ? acumulado : actual), percentage[0]);
    let capacity = events.map(event => { return { name: event.name, capacity: event.capacity } })
        .reduce((accumulado, actual) => accumulado.capacity >= actual.capacity ? accumulado : actual);
    dataEvents.innerHTML += `<tr>
                                <td>${highest.name}</td>
                                <td>${highest.percentage.toFixed(0)}%</td>
                                <td>${lowest.name}</td>
                                <td>${lowest.percentage.toFixed(0)}%</td>
                                <td>${capacity.name}</td>
                                <td>${capacity.capacity.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                            </tr>`
}