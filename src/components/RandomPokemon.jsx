import React, { useState, useEffect } from 'react'

const RandomPokemon = () => {

    const [pokemonData, setPokemonData] = useState({
        image: null,
        pokemonName: null,
        id: null,
        xp: null,
        height: null,
        weight: null,
        dataState: false
    })
                       
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 150)
        const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemonData({
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

    if (!pokemonData.dataState) {
        return <div>Loading...</div>
    }
    
    return (
        <button type= "button" className='pokemonCard'>
            <img src={pokemonData.image} className="pokemonImage"></img>
            <div className='pokemonCardText'>
                <span >Name: {pokemonData.pokemonName}</span>
                <span >ID: {pokemonData.id}</span>
                <span >XP: {pokemonData.xp}</span>
                <span >Height: {pokemonData.height}</span>
                <span >Weight: {pokemonData.weight}</span>
            </div>
        </button>         
    ) 
}

export default RandomPokemon