const promise = document.getElementById('promise');
const async = document.getElementById('async');
let text = document.getElementById('texto');
let image = document.getElementById('image');
const monsterName = document.getElementById('searched');
const apiURL = 'https://mhw-db.com/monsters/';


function fetchPromise(){
    const getURL = apiURL + monsterName.innerText;
    alert(getURL);
    console.log(getURL);
    fetch(apiURL)
        .then(response =>{
            if(!response.ok){
                throw new Error('La solicitud no pudo ser completada');
            }
            return response.json();
        })
        .then(responseData =>{
            text.innerText = 'respuesta promise';
        })
}

async function asyncAwait(){

    const getURL = apiURL + monsterName.innerText;
    let reponse = await fetch(getURL);
    let data = await reponse.json();
    console.log(reponse);
    console.log('data',data);
}


promise.addEventListener('click',()=>{
    //alert('soy una promesa');
    fetchPromise();
})
async.addEventListener('click',()=>{
   // alert('soy una async');
    asyncAwait();
})
