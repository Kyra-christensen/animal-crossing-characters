import { getACharacter } from '../fetch-utils.js';
import { renderCharacterDetail } from '../render.utils.js';

const characterDetailContainer = document.querySelector('#character-detail-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const character = await getACharacter(id);
    const characterDetailEl = renderCharacterDetail(character);
    characterDetailContainer.append(characterDetailEl);
});