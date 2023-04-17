
setDetails('','','','','','','','','');

function createDetails() {
    let id = sessionStorage.getItem('id');
    let page = sessionStorage.getItem('page');
    console.log(id, page);
    // createCardDivDetails(imagen, nombre, date, descripcion, category, place, capacity, asistance, precio);
}

createDetails();
