
const RandomPokemon = () => {

    const pokemonData = {
        image: null,
        pokemonName: null,
        id: null,
        xp: null,
        height: null,
        weight: null,
        dataState: false
    }
                       
    const randomNumber = Math.floor(Math.random() * 150)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        pokemonData.image = (data.sprites.other["official-artwork"].front_default)
        pokemonData.pokemonName = (data.name)
        pokemonData.id = (data.id)
        pokemonData.xp = (data.base_experience)
        pokemonData.height = (data.height)
        pokemonData.weight = (data.weight)
        pokemonData.dataState = (true)     
    },
    !pokemonData.dataState && return <div>Loading...</div>
    )

    
    return (

        <div className='pokemonCard'>
            <img src={pokemonData.image} className="pokemonImage"></img>
            <div className='pokemonCardText'>
                <span >Name: {pokemonData.pokemonName}</span>
                <span >ID: {pokemonData.id}</span>
                <span >XP: {pokemonData.xp}</span>
                <span >Height: {pokemonData.height}</span>
                <span >Weight: {pokemonData.weight}</span>
            </div>
        </div>         
    ) 
    }

    



export default RandomPokemon