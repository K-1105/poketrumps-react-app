import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'
import RandomPokemonA from './RandomPokemonA'
import RandomPokemonB from './RandomPokemonB'
import RandomPokemonC from './RandomPokemonC'
 
 
 // Components to show in MainBlock on cards screen***********************************
 const CardsMainComponent = (props) => {
        
    const [round, setRound] = useState(parseInt(localStorage.getItem("round")) || 0)

    
    useEffect(() => {
        const newRound = round + 1
        localStorage.setItem("round", newRound.toString())
        setRound(newRound)
    }, [])

    return (
        <div className='Slate'>
            <header className='Slate-header'>
                <p className='App-text' style={{ marginRight: "22vw" }}>ROUND {localStorage.getItem("round")}</p>
                <img
                    src={logo}
                    className="App-logo-small"
                    alt="small logo" />
            </header>
            <div className='Slate-header'>
                <p className='App-text'>
                    You can choose between...
                </p>
                <p className='App-text' style={{ marginLeft: "20vw" }}>
                    You're opponent has...
                </p>
            </div>
            <div className='Card_Deck'>
                {<RandomPokemonA cardClick = {props.propsA} />}
                {<RandomPokemonB cardClick = {props.propsB} />}
                {<RandomPokemonC/>}
            
            </div>
            <p className='App-text'>
                Click on the Pokemon you choose to battle
            </p>
        </div>            
    )
}

export default CardsMainComponent