/* 
2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.
*/
const baseUrl = 'https://api.nationalize.io';

let result;

const consult = (name) => {
    const url = `${baseUrl}?name=${name}`;
    fetch(url)
        .then((apiResponse) => {
            return apiResponse.json();
        })
        .then((myJson) => {
            console.log(myJson);
            result = myJson;
            return myJson;
        });

}

function appendDiv(info) {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const name = info.name;
    let country = info.country[0].country_id;
    let probability = info.country[0].probability;
    div.innerHTML = 'El nombre ' + name + ' tiene un ' + probability + ' de ser de '+ country;
}



// selecciono los elementos del html de los que voy a obtener info
const button = document.querySelector("#button_consult");
const input = document.querySelector("#input_consult");

function buttonHandler() {
    const textInput = input.value;
    consult(textInput);
    appendDiv(result)
}

button.addEventListener('click', buttonHandler);


