axios.get('https://rickandmortyapi.com/api/character')
.then(response =>{
    const characters = response.data.results;
    const charactersListDiv = document.getElementById('charactersList');

    const specie = document.getElementById('select_Species');
    specie.innerHTML = ''

    const gender = document.getElementById('select_Gender');
    specie.innerHTML = ''

    const statu = document.getElementById('select_Status');
    specie.innerHTML = ''

    
    const newSpecie = new Set();
    characters.forEach(character => {
      newSpecie.add(character.species)
    })
    newSpecie.forEach(newSpecie => {
      const optionSpecie = document.createElement('option');
      optionSpecie.textContent = newSpecie
      specie.appendChild(optionSpecie);
    });

    const newGender = new Set();
    characters.forEach(character => {
      newGender.add(character.gender)
    });

    newGender.forEach(newGender => {
      const optionGender = document.createElement('option');
      optionGender.textContent = newGender;
      gender.appendChild(optionGender);
    });


    const newStatus = new Set ();
    characters.forEach(character => {
      newStatus.add(character.status);
    });

    newStatus.forEach(newStatus => {
      const optionStatus = document.createElement('option');
      optionStatus.textContent = newStatus;
      statu.appendChild(optionStatus);
    });


      

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

    const txtName = document.getElementById('txtName');
    txtName.addEventListener('input', function(event) {
      let filter = event.target.value;
    });
