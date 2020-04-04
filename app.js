const image = document.getElementById('image');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const pokemonNameSpan = document.getElementById('pokemon-name');
const pokemonTypeSpan = document.getElementById('pokemon-type');

const Charmander = {
    name: 'Charmander',
    image: 'https://pm1.narvii.com/6458/d74415aec2cc1cece777a76509707051d9ed5825_hq.jpg',
    type: 'Type: Fire'
};

const Squirtle = {
    name: 'Squirtle',
    image: 'https://2.bp.blogspot.com/-2W-zSozUe1Q/VR4IcZ7z9rI/AAAAAAAAAM4/M_dPUTPez8E/s1600/Squirtle.jpg',
    type: 'Type: Water'
};

const Bulbasaur = {
    name: 'Bulbasaur',
    image: 'https://lh3.googleusercontent.com/proxy/acBm0V6ma9oEayE-oahaIqh6GPEvjjomtvU2XMObc7JjGa_S_EZ0_CEsCUZiW6kvJzJttp0t1rvbvZXwHLJDzE7c3AK5QLhqfHq5iPrj19t6Tza38Q',
    type: 'Type: Grass'
};

const Pikachu = {
    name: 'Pikachu',
    image: 'https://webstockreview.net/images/pikachu-clipart-small-4.png',
    type: 'Type: Electric'
};

let pokemonIndex = 0;

let pokedexArray = [Charmander, Squirtle, Bulbasaur, Pikachu];

pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
image.src = pokedexArray[pokemonIndex].image;

rightButton.addEventListener('click', () => {
    pokemonIndex++;
    pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
    image.src = pokedexArray[pokemonIndex].image;
    pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
    if (pokemonIndex > pokedexArray.length) {
        rightButton.disabled = true;
    }
});


leftButton.addEventListener('click', () => {
    pokemonIndex--;
    pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
    pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
    image.src = pokedexArray[pokemonIndex].image;

});

