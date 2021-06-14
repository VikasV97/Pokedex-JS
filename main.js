const poke_container = document.querySelector('.poke_container');

const poke_number = 150;
const fetchPokemons = async () => {
    for(let i=1; i<=poke_number; i++){
        await getPokemon(i);
    }
}
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await  res.json();
   
    //console.log(pokemon);
    createCard(pokemon);
}
fetchPokemons();


createCard = (pokemon) => {
    const pokeElement = document.createElement('div');
    pokeElement.classList.add('pokemon');
    
    
   
    
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const pokeInnerHTML = `
    <div class="img-container">
    <img class="poke-image" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
    </div>
    <div class="info>
        <span class="number">${pokemon.id}</span>
        <h3 class="name"?${name}</h3>
       
    </div>
    
    
    ${name}
    `;


    pokeElement.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokeElement);



    
    
   

}

;

popUp = (pokemon) => {
    const popBox = document.createElement('div');
    popBox.classList.add('popUp-styles')

    const popBoxContent = `<div class="img-container-popUp">
    <img class="poke-image-popUp" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
    </div>`

    popBox.innerHTML = popBoxContent;
    poke_container.appendChild(popBoxContent);
}
