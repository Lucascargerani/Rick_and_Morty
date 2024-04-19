axios.get('https://rickandmortyapi.com/api/character')
  .then(response => {
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('characters-list');

    characters.forEach(character => {
      const characterName = document.createElement('p');
      characterName.textContent = character.name;
      charactersListDiv.appendChild(characterName);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro ao fazer a requisição:', error);
  });