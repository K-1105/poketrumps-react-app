import React, { useState } from 'react'

const RandomPokemon = () => {
        
    const [image, setImage] = useState(null)
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    const [xp, setXp] = useState(null)
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [dataState, setDataState] = useState(false)

    const getPokemon = () => {
                
        const randomNumber = Math.floor(Math.random() * 150)
        const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setImage(data.sprites.other["official-artwork"].front_default)
            setName(data.name.toUpperCase())
            setId(data.id)
            setXp(data.base_experience)
            setHeight(data.height)
            setWeight(data.weight)
            setDataState(true)
        })

        return (
            <div>
                {
                dataState && 
                    <div className='mainCard'>
                    <img src={image} className="pokemonImage"></img>
                    <div className='mainText'>
                        <span >Name: {name}</span>
                        <span >ID: {id}</span>
                        <span >XP: {xp}</span>
                        <span >Height: {height}</span>
                        <span >Weight: {weight}</span>
                    </div>
                    </div>
                }
                <button 
                type="button" onClick={() => getPokemon} 
                className='buttonGenerate'>
                    Generate
                </button>
            
            </div>
        ) 
    }

    return(
        getPokemon()
    )
}

export default RandomPokemon