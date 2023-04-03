import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'
import RandomPokemon from './RandomPokemon'



const MainBlock = () => {

// useState to update the mainBlock******************************************************
    const [mainBlock, setMainBlock] = useState()


// START OF: 
// functions to hold different views of the mainBlock starting from last seen in the game
// -------------------------------------------------------------------------------------

    // Components to show in MainBlock on cards screen***********************************
    const CardsMain = () => {

        return (
            <div className='Slate'>
                <header className='Slate-header'>
                    <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
                    <img
                        src={logo}
                        className="App-logo-small"
                        alt="small logo" />
                </header>
                <div className='Slate-header'>
                    <p className='App-text'>
                        You've been given...
                    </p>
                    <p className='App-text' style={{ marginLeft: "20vw" }}>
                        You're opponent has...
                    </p>
                </div>
                <RandomPokemon/>
            </div>
        )
    }
            
                    

    // Components to show in MainBlock on intro screen***********************************
    const IntroMain = () => {

        // useEffect(() => {
        //     const timer = setTimeout(() => {
        //       setMainBlock(cardsMain)
        //     }, 2000);
        //     return () => clearTimeout(timer);
        // }, []);
        
        
        return (
            
            <div className='Slate'>
                <img 
                    src= {logo} 
                    className= "App-logo-small" 
                    alt= "small logo" 
                />
                <p 
                className= "App-text">
                    Okay, let's battle some Pokemon!
                </p>
            </div>
            

        )
    }


    // Components to show in MainBlock on rules screen***********************************
    const rulesMain = () => {
        return (
            <div className='Slate'>
                <img 
                    src= {logo} 
                    className= "App-logo-small" 
                    alt= "small logo" 
                />
                <p 
                className= "App-text">
                    In this game you will be battling a mixture of cute and fearsome
                    pokemon with an opponent in an attempt to win all 8 gym badges
                    and become the best poke-trainer in the land.
                    All you need to do is select the pokemon you want to play with.
                    Then, the pokemon with the highest number in a randomly selected 
                    stat (ID, Height, or Weight) will win!
                    Remember to take a close look at the pokemon your opponent is
                    choosing between to give yourself the best chance of victory!
                </p>
                <div>
                    <button 
                        type= "button" 
                        className='Red-button' 
                        onClick= {() => setMainBlock(CardsMain)}>
                            Okay, I'm ready to start
                    </button>
                </div>
            </div>
        )
    }


    // Components to show in MainBlock on start screen***********************************
    const startMain = () => {
        return (
            

            <div className='Slate'>
                <header className= "App-header">
                    Hello, welcome to 
                </header>
                <img 
                    src= {logo} 
                    className= "App-logo" 
                    alt= "large rocking logo" 
                />
                <p 
                    className= "App-text">
                        are you ready to play?
                </p>
                <div 
                    className='App-footer'>
                        <button 
                            type= "button" 
                            className='Red-button' 
                            onClick= {() => setMainBlock(CardsMain)}>
                                START
                        </button>
                        <button 
                            type= "button" 
                            className='Red-button' 
                            onClick= {() => setMainBlock(rulesMain)}>
                                RULES
                        </button>
                    
                </div>
            </div>
        )
    }


// END OF: 
// functions to hold different views of the mainBlock------------------------------------
    
// Now everything is defined, load the startMain function to mainBlock to show it********
    
   
    useEffect(() => {
        setMainBlock(startMain)
    }, [])
    

    return (mainBlock)
}


export default MainBlock