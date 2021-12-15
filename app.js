// import functions and grab DOM elements
import { getAllCharacters } from './fetch-utils.js';
import { renderCharacterCard } from './render.utils.js';
// let state
const characterListContainerEl = document.querySelector('#character-list-container');
console.log(characterListContainerEl);

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async() => {
    const characters = await getAllCharacters();

    for (let character of characters) {
        const characterEl = renderCharacterCard(character);
        characterListContainerEl.append(characterEl);
    }
});