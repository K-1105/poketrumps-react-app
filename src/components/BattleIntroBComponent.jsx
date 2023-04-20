import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'


const BattleIntroBComponent = (props) => {
 
    // console.log(localStorage.pokemonAData)
       
    // read the local storage to access the current pokedex array or return an empty one if undefined
    const pokedexData = localStorage.pokedexB
    
    // append the ID for pokemon we logged separately to local storage 
    const updatedPokedex = [...pokedexData, localStorage.pokedexB, localStorage.pokedexC]

    //save the updated array lack to local storage
    localStorage.pokedex = updatedPokedex

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

    // determine the result and record to local storage
    if (myPokemon[randomAttribute] > oppositionPokemon[randomAttribute]) {
        localStorage.result = "win"
    }
    else if (myPokemon[randomAttribute] == oppositionPokemon[randomAttribute]) {
        localStorage.result = "draw"
    }
    else  {
        localStorage.result = "lose"
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
                    they will be battling using their {randomAttribute}!
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