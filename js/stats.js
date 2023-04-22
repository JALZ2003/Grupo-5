const dataUpcoming = document.querySelector('.dataUpcoming');
const dataPast = document.querySelector('.dataPast');
const dataEvents = document.querySelector('.dataEvents');

loadData(eventsPast(), dataPast);
loadData(eventsUpcoming(), dataUpcoming);
load();

async function loadData(list, container) {
    list = await list;
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
    let events = await eventsFetch();
    let percentage = events.map(event => {
        return { name: event.name, percentage: (('assistance' in event) ? event.assistance : event.estimate / event.capacity) * 100 }
    }).sort((a, b) => b.percentage - a.percentage);
    let capacity = events.map(event => { return { name: event.name, capacity: event.capacity } });
    let datas = [];
    for (let i = 0; i < percentage.length; i++) {
        let nameHighest = percentage[i].name;
        let nameLowest = percentage[percentage.length - i - 1].name;
        let nameCapacity = capacity[i].name;
        let object = { highest: nameHighest, lowest: nameLowest, capacity: nameCapacity };
        datas.push(object);
    }
    datas.forEach(event => {
        dataEvents.innerHTML += `<tr>
                                    <td>${event.highest}</td>
                                    <td>${event.lowest}</td>
                                    <td>${event.capacity}</td>
                                </tr>`
    })
}