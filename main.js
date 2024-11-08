//* EJERCICIO JS-06-DOM Manipulation
/*Requisitos:
1. Hacer funcional el programa de creación de tarjetas.
  -Funcional -> Debe implementar funciones (clásicas o de flecha).
  -No es válido colocar todo el código dentro de una sola función.
2. Refactorizar el código para que funcione con múltiples usuarios
3. El código debe seguir y aplicar buenas prácticas vistas durante la sesiones.*/

const users = [
    {
        id: 1,
        username: 'ALI', //User1
        description: '¡Hola, un gusto! Soy Ali y amo la música clásica',
        age: '46',
        fav_music: {
            bands: [
                'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bac', 'Frédéric Chopin'  //'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        username: 'DANIEL',  //User LastNamr
        description: '¡Hey, soy Daniel! Soy fan del rock en español',  
        age: '33',
        fav_music: {
            bands: [
                'Soda Stereo', 'Héroes del Silencio', 'Los Fabulosos Cadillacs', 'Café Tacvba'  //'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 3,
        username: 'CHEMA',  //User3
        description: 'Soy Chema y me gusta disfrutar de la cumbia',
        age: 41,
        fav_music: {
            bands: ['Los Ángeles Azules', 'La Sonora Dinamita', 'Grupo Firme', 'Damas Gratis'],
        }
    }
]
//Constantes globales
const IMAGE_URL = 'https://static.vecteezy.com/system/resources/previews/005/939/898/non_2x/hear-music-icon-design-of-the-symbol-of-listening-to-music-on-a-smartphone-using-earphones-free-vector.jpg';
const CARD_CONTAINER = document.getElementById('container');

//Botón Mostrar/Ocultar
document.getElementById('btn-hide').addEventListener('click', e => {
    CARD_CONTAINER.style.visibility = (CARD_CONTAINER.style.visibility === 'hidden') ? 'visible' : 'hidden';
});

//FUNCIONES PARA CREAR CADA ELEMENTO DE LA TARJETA
//Creador de tarjetas, dividiendo cada parte de la tarjeta en una función

//1. Se crear un contenedeor para la imagen
const imageCreator = () => {
    const img_container = document.createElement('div');
    const image = document.createElement('img');
    image.src = IMAGE_URL;
    image.alt = 'Placeholder user photo';
    img_container.appendChild(image);
    return img_container;
}

// 2. Se crea un elemento h3 para el nombre de usuario
const usernameCreator = (user) => {
    const userName = document.createElement('h3');
    userName.textContent = user.username;
    return userName;
}

// Se crea un elemento p para la descripción
const descriptionCreator = (user) => {
    const description = document.createElement('p');
    description.textContent = user.description;
    return description;
}

// Se crea un elemento p para la edad
const ageCreator = (user) => {
    const age = document.createElement('p');
    age.textContent = user.age;
    return age;
}

// Se crea una lista ul con los elementos li para las bandas favoritas
const bandsCreator = (user) => {
    const bands = document.createElement('ul');
    const bandList = user.fav_music.bands.map((e) => {
        const item = document.createElement('li');
        item.textContent = e;
        return item;
    });
    bands.append(...bandList);
    return bands;
}

// FUNCIÓN PRINCIPAL PARA CREAR UNA TARJETA COMPLETA
// Crear un elemento div para la tarjeta y agrega sus elementos  -->  Unificar las partes
const cardCreator = (user) => {
    const card = document.createElement('div');
    card.classList.add('card');
    const img_container = imageCreator();
    const userName = usernameCreator(user);
    const description = descriptionCreator(user);
    const age = ageCreator(user);
    const bands = bandsCreator(user);
    card.append(img_container, userName, description, age, bands);
    return card;
}

//FUNCIÓN PARA LLENAR EL CONTENEDOR CON TARJETAS DE TODOS LOS USUARIOS
// Recorrer el array de usuarios y crea una tarjeta para cada uno
const cardFiller = () => {
    users.forEach((user) => {
        const card = cardCreator(user);
        CARD_CONTAINER.appendChild(card);
    });
}
cardFiller();

// cardFiller(); "pone en marcha" todo el proceso de creación de tarjetas. Sin esta línea, las funciones estarían definidas, pero no se ejecutarían y no veríamos ninguna tarjeta en la página.





//* CLASE CON ZABD
/* const title = document.getElementById("title");

console.log(title);

const titleInput = document.getElementById("title-input");



const paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);


titleInput.addEventListener("input",(event => {

    console.log(event);
    title.textContent = event.target.value;

}));

//paragraphs.forEach((e) => {e.textContent = Event.target.value});

const paragraph1 = document.createElement("p");

paragraph1.textContent = "Parrafo 1";


document.getElementById("main-content").appendChild(paragraph1);*/
