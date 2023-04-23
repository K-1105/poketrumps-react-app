import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'
import CardsMainComponent from './CardsMainComponent'
import BattleIntroBComponent from './BattleIntroBComponent'
import BattleIntroAComponent from './BattleIntroAComponent'
import BattleEndComponent from './BattleEndComponent'




const MainBlock = () => {

// useState to update the mainBlock******************************************************
    const [mainBlock, setMainBlock] = useState()




// START OF: 
// functions to hold different views of the mainBlock starting from last seen in the game
// -------------------------------------------------------------------------------------

    // Components to show in MainBlock on battle end screen***********************************
    const BattleEnd = () => {

        return (
            <div>
                {<BattleEndComponent 
                    buttonClickYes = {() => setMainBlock(CardsMain)} 
                    buttonClickNo = {() => setMainBlock(startMain)} 
                />}
            </div>
        )
    }



    // Components to show in MainBlock on battle intro screen***********************************
    const BattleIntroA = () => {

        return (
            <div>
                {<BattleIntroAComponent buttonClick = {() => setMainBlock(BattleEnd)}/>}
            </div>
            
        )
    }


    const BattleIntroB = () => {

        return (
            <div>
                {<BattleIntroBComponent buttonClick = {() => setMainBlock(BattleEnd)}/>}
            </div>
            
        )
    }


 // Components to show in MainBlock on cards screen***********************************
    const CardsMain = () => {

        return (
            <div>
                {<CardsMainComponent 
                    propsA = {() => setMainBlock(BattleIntroA)} 
                    propsB = {() => setMainBlock(BattleIntroB)}
                />}
            </div>)
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
                    pokemon with an opponent in an attempt to become the best 
                    poke-trainer in the land.
                    All you need to do is select the pokemon you want to play with.
                    Then, the pokemon with the highest number in a randomly selected 
                    stat (ID, XP, Height, or Weight) will win!
                    Remember to take a close look at the pokemon your opponent has
                     to give yourself the best chance of victory!
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
                <div>
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