var pageIndex = 1;
axios.get('https://rickandmortyapi.com/api/character?limit=8',{
  params:{
    page: pageIndex
  }
})
.then(response =>{
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('divPrincipal');

    const specie = document.getElementById('select_Species');
    specie.innerHTML = ''

    const status = document.createElement('p');
    const namePerson = document.createElement('p');
    const especie = document.createElement('p');
    const img = document.createElement('img')

    characters.forEach(characters => {
      const option = document.createElement('option');
      option.textContent = characters.species;
      specie.appendChild(option)
      console.log("especie: ",characters.specie)
    });

    let i = 0;
    let count = 8;
    while(i< count) {



    img.src = characters[i].image;
    especie.textContent = characters[i].species;
    status.textContent = characters[i].status;

    namePerson.textContent = characters[i].name;
    const characterDiv = document.createElement('div');

    characterDiv.classList.add('charactersDiv');
    namePerson.classList.add('infoDiv');
    img.classList.add('iconPersons');
    especie.classList.add('especie');
    characterDiv.appendChild(img);
    characterDiv.appendChild(namePerson);
    characterDiv.appendChild(especie);

    charactersListDiv.appendChild(characterDiv);

    i++;
     }
    })
    .catch((error)=>{
      console.log(error)
  })