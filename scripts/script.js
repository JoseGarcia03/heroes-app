//Importamos el modulo con la informacion de los heroes
import { data } from './data.js'

//Capturamos el area en donde se va inyectar el html con los heroes
const main = document.querySelector('#main')

//Funcion para mostrar los heroes
function showHeroes(heroes) {

    main.innerHTML = '';

    heroes.forEach((heroe)=> {

        const movieEl = document.createElement('div') //Creamos un elemento div
        movieEl.classList.add('movie') // Al elemento que acabamos de crear le agregador una clase llamada movie

        //Inyectamos HTML al DIV que acabamos de crear
        movieEl.innerHTML = `
            <img src="${heroe.image}" alt="${heroe.name}">
            <div class="movie-info">
                <h3>${heroe.name}</h3>
                <span class="green">0.9</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${heroe.first_appearance}
            </div>
        `

        main.appendChild(movieEl)
    })
}

//Llamamos a la funcion para que se ejecute
showHeroes(data);

//-- Funcion de buscar

//Capturamos el formulario
const form = document.getElementById('form')

//Escuchamos el evento submit en el formulario
form.addEventListener('submit', (e)=> {
    //Capturamos el evento que hace refrescar la pagina y lo detenemos
    e.preventDefault();

    //Capturamos la palabra escrita en el input
    const search = document.querySelector('#search').value;

    //Usamos un .filter para que nos genere un nuevo array con el resultado de los heroes que correspondan a la busqueda
    const resultado = data.filter(heroe=> heroe.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    //Llamamos a la funcion que pinta en pantalla los heroes pero le pasamos el nuevo array con el resultado de la busqueda
    showHeroes(resultado)
})