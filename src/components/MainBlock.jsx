import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'



const MainBlock = () => {

// useState to update the mainBlock******************************************************
    const [mainBlock, setMainBlock] = useState()


// START OF: 
// functions to hold different views of the mainBlock starting from last seen in the game
// -------------------------------------------------------------------------------------

    // Components to show in MainBlock on cards screen***********************************
    const cardsMain = () => {


        return (
            <div className='Slate'>
            <header>
                <p className='App'>ROUND 1</p>
                <img 
                    src= {logo} 
                    className= "App-logo-small" 
                    alt= "small logo" 
                />
            </header>
            <p 
            className= "App-text">
                
            </p>
            </div>
        )
    }


    // Components to show in MainBlock on intro screen***********************************
    const IntroMain = () => {

        useEffect(() => {
            const timer = setTimeout(() => {
              setMainBlock(cardsMain)
            }, 2000);
            return () => clearTimeout(timer);
        }, []);
        
        
        return (
            
            <div className='Slate'>
                <img 
                    src= {logo} 
                    className= "App-logo-small" 
                    alt= "small logo" 
                />
                <p 
                className= "App-header">
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
                        onClick= {() => setMainBlock(IntroMain)}>
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
                    // style= {{ width:525, height: 150 }} 
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
                            onClick= {() => setMainBlock(IntroMain)}>
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