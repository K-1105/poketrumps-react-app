import React, { useState, useEffect } from 'react'

const RandomPokemonC = (props) => {

 // define where the data wil go when set
 const [pokemonCData, setPokemonCData] = useState({
    image: null,
    pokemonName: null,
    id: null,
    xp: null,
    height: null,
    weight: null,
    dataState: false
})
      
// populate the data on render with useEffect bu picking a random number as an ID and fetching the pokemon from the API
useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 150)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            setPokemonCData({
                image: (data.sprites.other["official-artwork"].front_default),
                pokemonName: (data.name),
                id: (data.id),
                xp: (data.base_experience),
                height: (data.height),
                weight: (data.weight),
                dataState: (true)
            })
        })
}, [])





// the last data to be set synchronously is dataState, if this isn't ready yet show a 'Loading...'
if (!pokemonCData.dataState) {
    return <div className='"App-text'>Loading...</div>
}


// log the pokemon in local storage for the pokedex and for battle data
localStorage.pokemonCData = JSON.stringify(pokemonCData)
localStorage.pokedexC = (pokemonCData.id)






// when all the data is set return the components 
return (
    // console.log(pokemonData),
    <button  className='pokemonCard' style= {{ marginLeft: "22vw", pointerEvents: "none"}} >
        <img src={pokemonCData.image} className="pokemonImage" alt='pokemon'></img>
        <div className='pokemonCardText'>
            <span >Name: {pokemonCData.pokemonName}</span>
            <span >ID: {pokemonCData.id}</span>
            <span >XP: {pokemonCData.xp}</span>
            <span >Height: {pokemonCData.height}</span>
            <span >Weight: {pokemonCData.weight}</span>
        </div>
    </button>         
) 


}

export default RandomPokemonC