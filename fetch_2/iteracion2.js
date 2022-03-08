/* 
2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
*/
const baseUrl = 'https://api.nationalize.io';


const consult = (name) => {
    const url = `${baseUrl}?name=${name}`;
    fetch(url)
        .then((apiResponse) => {
            return apiResponse.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });
    
}


// selecciono los elementos del html de los que voy a obtener info
const button = document.querySelector("#button_consult");
const input = document.querySelector("#input_consult");

function buttonHandler() {
    const textInput = input.value;
    consult(textInput);
}

button.addEventListener('click', buttonHandler);


