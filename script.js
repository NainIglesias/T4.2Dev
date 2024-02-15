const promise = document.getElementById('promise');
const async = document.getElementById('async');
let text = document.getElementById('texto');
let image = document.getElementById('image');
const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/';
const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '137265fd30mshce5b2112f9ef1c9p1faffejsnc2350ba2913d',
		'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
	}
};


function fetchPromise(){
    // alert(getURL);
    // console.log(getURL)

    const monsterName = document.getElementById('searched').value;
    fetch(url+monsterName, options)
        .then(response =>{
            if(!response.ok){
                throw new Error('Carta no encontrada');
            }
            return response.json();
        })
        .then(responseData =>{
            //text.innerText = 'respuesta promise';
            //19j//console.log(responseData)
            responseData.forEach(element => {
                if(element.hasOwnProperty('img')){
                    image.setAttribute('src', element.img);
                    //console.log(element.flavor);
                    text.innerText = element.flavor;
                }
            });
            // image.setAttribute('src',responseData[1].imgGold);

        })
}

async function asyncAwait(){

    const monsterName = document.getElementById('searched').value;
    try {
        const response = await fetch(url + monsterName, options);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        const responseData = await response.json();
    
        responseData.forEach(element => {
            if (element.hasOwnProperty('img')) {
                image.setAttribute('src', element.img);
                text.innerText = element.flavor;
                //validarImagen(element);
                // break;
            }
        });
    } catch (error) {
        alert('Carta no encontrada');
    }
}


promise.addEventListener('click',()=>{
    //alert('soy una promesa');
    fetchPromise();
})
async.addEventListener('click',()=>{
    // alert('soy una async');
    asyncAwait();
})



