import { pokedexArray } from './pokedexArray.js';

//This makes it so the arrow keys don't scroll the window. Also disables spacebar..
window.addEventListener('keydown', function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

const image = document.getElementById('image');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const pokemonNameSpan = document.getElementById('pokemon-name');
const pokemonTypeSpan = document.getElementById('pokemon-type');
let searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const descriptionSpan = document.getElementById('description');


//This here is integral, need to initialize the index (i) of the array. Have to do this
// if you are not using a for loop to initialize it:
let pokemonIndex = 0;

//here is the view state initialization:
image.src = pokedexArray[pokemonIndex].image;
pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
descriptionSpan.textContent = pokedexArray[pokemonIndex].description;

//Here are the two buttons.
rightButton.addEventListener('click', () => {
    //This if statement below is imortant so pressing left doesn't move the array out of the 
    // 0 - array.length range. Otherwise it will past the limits of the array:
    if (pokemonIndex < pokedexArray.length - 1) {
        pokemonIndex++;
        upDate();       
    }
});

leftButton.addEventListener('click', () => {
    //similar if statement here but different for the other direction decrimating
    if (pokemonIndex > 0) {
        pokemonIndex--;        
        upDate();        
    }
});

document.addEventListener('keypress', (event) => {
    let code = event.keyCode;
    if (code === '39'){
        //event.preventDefault();
        document.getElementById('rightButton').click(); 
        
    }
});


//This is the button that triggers the search function
searchButton.addEventListener('click', () => {

//Here we put the input.value and the array in as parameters, and it returns the
//array[i] index that we desire. that is returned and contained in the variable searchResult:
    let searchResult = search(searchInput.value, pokedexArray);

//This part uses the index held by searchResult to update all the relevant
//spans and images on the view. This part should be refactored into a function of its own.
    pokemonNameSpan.textContent = searchResult.name;
    pokemonTypeSpan.textContent = searchResult.type;
    descriptionSpan.textContent = searchResult.description;
    image.src = searchResult.image;
    
//This part is Integral. This updates the index of the array to match the updates of the
// key value pairs we just did above. Without this the view will be updated but the index won't.  
    let searchIndex = pokedexArray.indexOf(searchResult);
    pokemonIndex = searchIndex;
    return pokemonIndex;
});


//This makes the search button react to the enter key being pressed:
document.getElementById('search-input').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById('search-button').click();
    }
});






//This is the search function. nameKey represents an Input.value It takes in the search 
//from the input.value and check to  see if it matches the value in the array key. 
//If it does it returns the array index:
function search(nameKey, myArray){
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i].name === nameKey || myArray[i].lowerName === nameKey) {
            return myArray[i];
        }   
    }   
}


//This function updates the view when the left and right buttons are clicked:
function upDate(){
    pokemonNameSpan.textContent = pokedexArray[pokemonIndex].name;
    pokemonTypeSpan.textContent = pokedexArray[pokemonIndex].type;
    descriptionSpan.textContent = pokedexArray[pokemonIndex].description;
    image.src = pokedexArray[pokemonIndex].image;
}



//This is a bunch of shit I could'nt get to work. Trying to make the right and left buttons
//be clicked when you press the right and left arrow keys. Will fix later.

// document.getElementById('leftButton').addEventListener('keyup', function(event){
//     event.preventDefault();
//     if (event.keyCode === 37) {
//         document.getElementById('leftButton').click();
//     }
// });

// document.getElementById('rightButton').addEventListener('keyup', function(event){
//     event.preventDefault();
//     if (event.keyCode === 39) {
//         document.getElementById('rightButton').click();
//     }
// });
