import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'


const BattleIntroBComponent = (props) => {
 
    // read the local storage to access the current pokedex array or return an empty one if undefined
    const updatedPokedex = localStorage.pokedex ? JSON.parse(localStorage.pokedex) : []
   
    // append the ID for pokemon we logged separately to local storage 
    updatedPokedex.push(...JSON.parse(`[${localStorage.pokedexA || ""}, ${localStorage.pokedexB || ""}, ${localStorage.pokedexC || ""}]`))

    // remove the duplicates from updated pokedex (numbers get 'rendered' twice)
    const updatedPokedexSet = [...new Set(updatedPokedex)]


    //save the updated array lack to local storage
    localStorage.pokedex = JSON.stringify(updatedPokedexSet)

    console.log(localStorage.pokedex)



    // call the the bulk pokemon battle data for use
    const myPokemon = JSON.parse(localStorage.getItem("pokemonBData"))
    console.log(myPokemon["pokemonName"])

    const oppositionPokemon = JSON.parse(localStorage.getItem("pokemonCData"))
    console.log(oppositionPokemon["pokemonName"])

    // set an array with the random battle attributes to pick from
    const battleAttributes = ["height", "id", "weight", "xp"]
    console.log(battleAttributes)
    const randomAttribute = battleAttributes[Math.floor(Math.random() * battleAttributes.length)]

    //pick a random attribute
    localStorage.battleAttribute = randomAttribute
    console.log(localStorage.battleAttribute)

//record the single result in local storage then also check if a tally has started, if so +1 if not make 1

const UpdateWins = () => {

    const [wins, setWins] = useState(localStorage.wins ? (JSON.parse(localStorage.wins)) : 0)
    
    useEffect(() => {
        const newWins = wins + 1
        localStorage.wins = newWins.toString()
        setWins(newWins)
    }, [])
}

const UpdateDraws = () => {

    const [draws, setDraws] = useState(localStorage.draws ? (JSON.parse(localStorage.draws)) : 0)
    
    useEffect(() => {
        const newDraws = draws + 1
        localStorage.draws = newDraws.toString()
        setDraws(newDraws)
    }, [])
}

const UpdateLoses = () => {

    const [losses, setLosses] = useState(localStorage.losses ? (JSON.parse(localStorage.losses)) : 0)
    
    useEffect(() => {
        const newLosses = losses +1
        localStorage.loses = newLosses.toString()
        setLosses(newLosses)
    }, [])
}


if (myPokemon[randomAttribute] > oppositionPokemon[randomAttribute]) {
    localStorage.result = "win"
    UpdateWins()
}

else if (myPokemon[randomAttribute] === oppositionPokemon[randomAttribute]) {
    localStorage.result = "draw"
    UpdateDraws()
}

else if (myPokemon[randomAttribute] < oppositionPokemon[randomAttribute]) {
    localStorage.result = "lose"
    UpdateLoses()
}

console.log(localStorage.result)



    return (
        <div className='Slate'>
            <header className='Slate-header'>
                <p className='App-text' style={{ marginRight: "22vw" }}>ROUND {localStorage.getItem("round")}</p>
                <img
                    src={logo}
                    className="App-logo-small"
                    alt="small logo" />
            </header>
            <div className='Battle_Slate_Header'>
                <p className='App-text'>
                    You chose {myPokemon.pokemonName} to battle against {oppositionPokemon.pokemonName},
                </p>
                <p className='App-text'>
                    they will be battling using their {localStorage.battleAttribute}!
                </p>
            </div>
            <div style={{ marginLeft: "-1vw", marginRight: "auto"}}>
                <button 
                    type= "button" 
                    className='Red-button' 
                    style={{ margin: "0vw 1vw", display: "inline-block", scale: "80%"  }}
                    onClick= {props.buttonClick}>
                        BATTLE
                </button>
            </div>
            <div className='Battle_Deck'>
                <img src={myPokemon.image} className="pokemonImage_Battle" alt='my pokemon'></img>
                <img src={oppositionPokemon.image} className="pokemonImage_Battle" alt='opposition pokemon'></img>
            </div>
        </div>
        
    )
}

export default BattleIntroBComponent