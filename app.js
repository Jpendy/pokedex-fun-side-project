import { pokedexArray } from './pokedexArray.js'

const image = document.getElementById('image');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const pokemonNameSpan = document.getElementById('pokemon-name');
const pokemonTypeSpan = document.getElementById('pokemon-type');
let searchInputSpan = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let pokemonIndex = 0;

//let searchInput = titleCase(searchInputSpan.value);

//searchInputSpan.value = titleCase(searchInputSpan.value);

pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
image.src = pokedexArray[pokemonIndex].image;



searchButton.addEventListener('click', () => {
    let searchResult = search(searchInputSpan.value, pokedexArray);

    pokemonNameSpan.textContent = searchResult.name;
    pokemonTypeSpan.textContent = searchResult.type;
    image.src = searchResult.image;
    
    let searchIndex = pokedexArray.indexOf(searchResult);
    
    pokemonIndex = searchIndex;
    return pokemonIndex;
});


rightButton.addEventListener('click', () => {
    if (pokemonIndex < pokedexArray.length - 1) {
        pokemonIndex++;
        pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
        image.src = pokedexArray[pokemonIndex].image;
        pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
    }
});


leftButton.addEventListener('click', () => {
    console.log(pokemonIndex);
    if (pokemonIndex > 0) {
        pokemonIndex--;
        pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
        pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
        image.src = pokedexArray[pokemonIndex].image;
    }
});





function search(nameKey, myArray){
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i].name === nameKey || myArray[i].lowerName === nameKey) {
            return myArray[i];

        }   
    }   
}

function titleCase(str) {
    return str.replace(/\w\S/g, function(t) { return t.toUpperCase(); });
}