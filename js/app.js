var pageIndex = 1;
axios.get('https://rickandmortyapi.com/api/character?limit=8',{
  params:{
    page: pageIndex
  }
})
.then(response =>{
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('charactersList');

    const specie = document.getElementById('select_Species');
    specie.innerHTML = ''

    const gender = document.getElementById('select_Gender');
    specie.innerHTML = ''

    const statu = document.getElementById('select_Status');
    specie.innerHTML = ''
    // const specieOption = characters.map(characters => characters.specie);
    // const uniqueOption = specieOption.filter((specie, index) => specie && specie.indexOf(specie === index));

    //criar uma variavel tipo array
    //adicionar as specie no array 
    //criar outro array com o metodo Set


    let specieOption = characters.species
    const newSpecie = [... new Set(specieOption)];


    newSpecie.forEach(newSpecie => {
      const optionSpecie = document.createElement('option');
      optionSpecie.textContent = newSpecie
      specie.appendChild(optionSpecie);
    });
      // const optionGender = document.createElement('option');
      // optionGender.textContent = characters.gender;
      // gender.appendChild(optionGender);

      // const optionStatus = document.createElement('option');
      // optionStatus.textContent = characters.status;
      // statu.appendChild(optionStatus);


    

    let i = 0;
    let count = 8;
    while(i < count) {

    const status = document.createElement('p');
    const namePerson = document.createElement('p');
    const especie = document.createElement('p');
    const img = document.createElement('img');

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
