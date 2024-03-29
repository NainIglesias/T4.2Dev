# Promesas Async/Await
Pequeña página web humilde en el que se testean los conceptos básicos sobre promesas y async/await. La página representaría una partida de Hearthstone, en la que puedes buscar cualquier carta que se encuentre actualemente dentro del juego mientras suena la música de combate de fondo.
Para este trabajo he utilizado la [API de Hearthstone](https://hearthstone.blizzard.com/en-us/cards?set=standard&sort=manaCost%3Aasc%2Cname%3Aasc%2Cclasses%3Aasc%2CgroupByClass%3Aasc%2CgroupByClass%3Aasc)a la cual hago peticiones por fetch de distintas maneras.
El funcionamiento de la pàgina es  el siguiente: El usuario ingresa en el campo de búsqueda la carta a buscar y , si la encuentra, muestra la carta y la descripción de la misma en pantalla.
Para testear el funcionamiento de la web usé la base de datos donde se ecncuentran todas las [cartas actuales](https://hearthstone.blizzard.com/en-us/cards/).
<p style="background-color:red; margin:5%; padding: 10px; width: fit-content;">¡¡¡ OJO, LAS PETICIONES A LA API NO SON CASE SENSITIVE !!!</p>
 Si no la encuentra puede saltar una de las 2 excepciones:

- La primera es cuando no encuentra la carta y se ha pulsado el botón de búsqueda por pormesa, el programa recogera el error de que la petición a la api ha fallado y se mostrará por consola un error personalizado.

``````
const monsterName = document.getElementById('searched').value;
    fetch(url+monsterName, options)
        .then(response =>{
            if(!response.ok){
                throw new Error('Carta no encontrada');
            }
            return response.json();
        })
``````
- En el segundo caso, la carta no se encuentra y se ha pulsado el botón de búsqueda por async, el programa recogera el error 404 y mostrará una alerta diciendo que la carta no se encuentra.
`````` 
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
``````
Otra parte impoortante es que para poder utilizar esta API, he tenido que pedir un tokken de acceso, que se pasa como parámentro en los headers de la petición, para poder acceder a la infromación. La página me dió dichos tokkens al registrarme en ella.
``````
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '137265fd30mshce5b2112f9ef1c9p1faffejsnc2350ba2913d',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
};
``````
[Enlace a la página web](https://nainiglesias.github.io/T4.2Dev/)
