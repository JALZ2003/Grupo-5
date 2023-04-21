// let id = JSON.parse(sessionStorage.getItem('id'));
let id = "6351b0a1b82050da15b3a866"
let url = "https://pro-talento.up.railway.app/api/amazing/" + id;

async function fetchApi(url) {
    try {
        let response = await fetch(url); //fetcheo la API
        response = await response.json(); //Transformo la API en datos que pueda usar
        let name = response.response.name;
        let category = response.response.category;
        let price = response.response.price;
        let {image, description, date, assistance, capacity, place} = response.response  // con esto podemos hacer todo lo de las lineas anteriores resumido
        setDetails(image,name,date,description,category,place,capacity,assistance,price) 
    } catch (error) {
        console.log(error)
    }
}

fetchApi(url);