const promise = document.getElementById('promise');
const async = document.getElementById('async');
let text = document.getElementById('texto');
let image = document.getElementById('image');
const monsterName = document.getElementById('searched').value;
const url = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/'+monsterName;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '137265fd30mshce5b2112f9ef1c9p1faffejsnc2350ba2913d',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
};


function fetchPromise(){
    // alert(getURL);
    // console.log(getURL);
    fetch(url, options)
        .then(response =>{
            if(!response.ok){
                throw new Error('La solicitud no pudo ser completada');
            }
            return response.json();
        })
        .then(responseData =>{
            //text.innerText = 'respuesta promise';
            //console.log(responseData)
            responseData.forEach(element => {
                if(element.hasOwnProperty('imgGold')){
                    image.setAttribute('src', element.imgGold);
                    text.innerText = element.faction;
                }
            });
            // image.setAttribute('src',responseData[1].imgGold);

        })
}

async function asyncAwait(){

    const reponse = await fetch(url,options);
    const responseData = await reponse.json();
    // console.log(reponse);
    //console.log('data',data);

    responseData.forEach(element => {
        if(element.hasOwnProperty('imgGold')){
            image.setAttribute('src', element.imgGold);
            text.innerText = element.faction;
        }
    });
}


promise.addEventListener('click',()=>{
    //alert('soy una promesa');
    fetchPromise();
})
async.addEventListener('click',()=>{
    // alert('soy una async');
    asyncAwait();
})
