export function renderCharacterCard(character) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('character-card');

    p.textContent = character.name;
    img.src = `./assets/${character.name}.png`;
    a.href = `./detail/?id=${character.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderCharacterDetail(character) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const nameEl = document.createElement('p');
    const speciesEl = document.createElement('p');
    const personalityEl = document.createElement('p');
    const catchphraseEl = document.createElement('p');

    div.classList.add('character-detail');

    nameEl.textContent = character.name;
    nameEl.classList.add('name');

    speciesEl.textContent = character.species;    
    speciesEl.classList.add('species');

    personalityEl.textContent = character.personality;
    personalityEl.classList.add('personality');

    catchphraseEl.textContent = character.catchphrase;
    catchphraseEl.classList.add('catchphrase');

    img.src = `../assets/${character.name}.png`;
    
    div.append(nameEl, img, speciesEl, personalityEl, catchphraseEl);

    return div;
}