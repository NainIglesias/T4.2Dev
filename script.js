const promise = document.getElementById('promise');
const async = document.getElementById('async');
let text = document.getElementById('texto');
let image = document.getElementById('image');
const monsterName = document.getElementById('searched');
const apiURL = 'https://mhw-db.com/monsters/';

promise.addEventListener('click',()=>{
    alert('soy una promesa');
    const getURL = apiURL + monsterName.innerText;
    fetch(getURL)
        .then(response =>{
            if(!response.ok){
                throw new Error('La solicitud no pudo ser completada');
            }
            return response.json();
        })
        .then(responseData =>{
            text.innerText = 'respuesta promise';


        })
})
async.addEventListener('click',()=>{
    alert('soy una async');
})
