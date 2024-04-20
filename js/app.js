axios.get('https://rickandmortyapi.com/api/character')
  .then(response => {
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('divPrincipal');

    characters.forEach(character => {

      const status = document.createElement('p');
      const namePerson = document.createElement('p');
      const especie = document.createElement('p');
      const img = document.createElement('img')

      img.src = character.image;
      especie.textContent = character.species;
      status.textContent = character.status;
      namePerson.textContent = character.name;
      const characterDiv = document.createElement('div');



      characterDiv.classList.add('charactersDiv');
      namePerson.classList.add('infoDiv');
      img.classList.add('iconPersons');
      especie.classList.add('especie');
      characterDiv.appendChild(img);7
      characterDiv.appendChild(namePerson);
      characterDiv.appendChild(especie);

      charactersListDiv.appendChild(characterDiv);


    });
  })
  .catch(error => {
    console.error('Ocorreu um erro ao fazer a requisição:', error);
  });