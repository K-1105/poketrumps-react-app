import React, { useState, useEffect } from 'react'

const RandomPokemonA = (props) => {

    // define where the data wil go when set
    const [pokemonAData, setPokemonAData] = useState({
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
                setPokemonAData({
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
    if (!pokemonAData.dataState) {
        return <div className='"App-text'>Loading...</div>
    }


    // log the pokemon in local storage for the pokedex and for battle data
    localStorage.pokemonAData = JSON.stringify(pokemonAData)
    localStorage.pokedexA = (pokemonAData.id)


    
  
    

    // when all the data is set return the components 
    return (
        // console.log(pokemonData),
        <button type= "button" className='pokemonCard' style= {{ marginLeft: "3vw" }} onClick= {props.cardClick}>
            <img src={pokemonAData.image} className="pokemonImage" alt='pokemon'></img>
            <div className='pokemonCardText'>
                <span >Name: {pokemonAData.pokemonName}</span>
                <span >ID: {pokemonAData.id}</span>
                <span >XP: {pokemonAData.xp}</span>
                <span >Height: {pokemonAData.height}</span>
                <span >Weight: {pokemonAData.weight}</span>
            </div>
        </button>         
    ) 


}

export default RandomPokemonA