axios.get('https://rickandmortyapi.com/api/character')
  .then(response => {
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('divPrincipal');

    characters.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.classList.add('charactersDiv');

      const namePerson = createElement('p');
      namePerson.textContent = character.name;
      characterDiv.append(namePerson);
      charactersListDiv.appendChild(characterDiv);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro ao fazer a requisição:', error);
  });