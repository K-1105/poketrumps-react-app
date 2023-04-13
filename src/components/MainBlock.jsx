import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'
import RandomPokemonA from './RandomPokemonA'
import RandomPokemonB from './RandomPokemonB'
import RandomPokemonC from './RandomPokemonC'



const MainBlock = () => {

// useState to update the mainBlock******************************************************
    const [mainBlock, setMainBlock] = useState()
    const round = 1


// START OF: 
// functions to hold different views of the mainBlock starting from last seen in the game
// -------------------------------------------------------------------------------------

    // Components to show in MainBlock on battle end screen***********************************
    const BattleEnd = () => {

         // call the the bulk pokemon battle data for use
         const myPokemon = JSON.parse(localStorage.getItem("pokemonAData"))
         console.log(myPokemon["pokemonName"])
 
         const oppositionPokemon = JSON.parse(localStorage.getItem("pokemonCData"))
         console.log(oppositionPokemon["pokemonName"])

         const battleAttribute = localStorage.getItem("battleAttribute")

         document.addEventListener('keypress', (event) => {
               setMainBlock(CardsMain)
          }) 



        return (
            <div>
                {localStorage.result == "draw" &&
                    <div className='Slate'>
                        <header className='Slate-header'>
                            <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
                            <img
                                src={logo}
                                className="App-logo-small"
                                alt="small logo" />
                        </header>
                        <div className='Battle_Slate_Header'>
                            <p className='App-text'>
                                {myPokemon.pokemonName} drew against {oppositionPokemon.pokemonName} on {battleAttribute}!
                            </p>
                            <p className='App-text'>
                                Press any key to play again
                            </p>
                        </div>
                        <div className='Battle_Deck'>
                            <img src={myPokemon.image} className="pokemonImage_End" alt='my pokemon'></img>
                            <img src={oppositionPokemon.image} className="pokemonImage_End" alt='opposition pokemon'></img>
                        </div>
                    </div>

                }

                {localStorage.result == "win" &&
                    <div className='Slate'>
                        <header className='Slate-header'>
                            <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
                            <img
                                src={logo}
                                className="App-logo-small"
                                alt="small logo" />
                        </header>
                            <div className='Battle_Slate_Header'>
                                <p className='App-text'>
                                    CONGRATULATIONS! {myPokemon.pokemonName} beat {oppositionPokemon.pokemonName} on {battleAttribute}!
                                </p>
                                <p className='App-text'>
                                    Click to play again
                                </p>
                            </div>
                            <div className='Battle_Deck'>
                                <img src={myPokemon.image} className="pokemonImage_End" alt='my pokemon' ></img>
                            </div>
                    </div>
                }
                
                {localStorage.result == "lose" &&
                    <div className='Slate'>
                        <header className='Slate-header'>
                            <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
                            <img
                                src={logo}
                                className="App-logo-small"
                                alt="small logo" />
                        </header>
                            <div className='Battle_Slate_Header'>
                                <p className='App-text'>
                                    I'm afraid {myPokemon.pokemonName} lost to {oppositionPokemon.pokemonName} on {battleAttribute}!
                                </p>
                                <p className='App-text'>
                                    Click to play again
                                </p>
                            </div>
                            <div className='Battle_Deck'>
                                <img src={oppositionPokemon.image} className="pokemonImage_End" alt='opposition pokemon'></img>
                            </div>
                    </div>
                }          
            </div>
        )
    }



    // Components to show in MainBlock on battle intro screen***********************************
    const BattleIntroA = () => {

        // console.log(localStorage.pokemonAData)
       
        // read the local storage to access the current pokedex array or return an empty one if undefined
        const pokedexData = localStorage.pokedexA
       
        // append the ID for pokemon we logged separately to local storage 
        const updatedPokedex = [pokedexData, localStorage.pokedexB, localStorage.pokedexC]

        //save the updated array lack to local storage
        localStorage.pokedex = updatedPokedex

        console.log(localStorage.pokedex)



        // call the the bulk pokemon battle data for use
        const myPokemon = JSON.parse(localStorage.getItem("pokemonAData"))
        console.log(myPokemon["pokemonName"])

        const oppositionPokemon = JSON.parse(localStorage.getItem("pokemonCData"))
        console.log(oppositionPokemon["pokemonName"])

        const battleAttributes = ["height", "id", "weight", "xp"]
        console.log(battleAttributes)
        const randomAttribute = battleAttributes[Math.floor(Math.random() * battleAttributes.length)]
        localStorage.battleAttribute = randomAttribute
        console.log(localStorage.battleAttribute)

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

        document.addEventListener('keypress', (event) => {
            setMainBlock(BattleEnd)
          })


        return (
            <div className='Slate'>
                <header className='Slate-header'>
                    <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
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
                    <p className='App-text'>
                        Press any key to commence!!
                    </p>
                </div>
                <div className='Battle_Deck'>
                    <img src={myPokemon.image} className="pokemonImage_Battle" alt='my pokemon'></img>
                    <img src={oppositionPokemon.image} className="pokemonImage_Battle" alt='opposition pokemon'></img>
                </div>
            </div>
            
        )
    }


    const BattleIntroB = () => {

        // console.log(localStorage.pokemonAData)
       
        // read the local storage to access the current pokedex array or return an empty one if undefined
        const pokedexData = localStorage.pokedexB
       
        // append the ID for pokemon we logged separately to local storage 
        const updatedPokedex = [pokedexData, localStorage.pokedexB, localStorage.pokedexC]

        //save the updated array lack to local storage
        localStorage.pokedex = updatedPokedex

        console.log(localStorage.pokedex)



        // call the the bulk pokemon battle data for use
        const myPokemon = JSON.parse(localStorage.getItem("pokemonBData"))
        console.log(myPokemon["pokemonName"])

        const oppositionPokemon = JSON.parse(localStorage.getItem("pokemonCData"))
        console.log(oppositionPokemon["pokemonName"])

        const battleAttributes = ["height", "id", "weight", "xp"]
        console.log(battleAttributes)
        const randomAttribute = battleAttributes[Math.floor(Math.random() * battleAttributes.length)]
        localStorage.battleAttribute = randomAttribute
        console.log(localStorage.battleAttribute)

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

        document.addEventListener('keypress', (event) => {
            setMainBlock(BattleEnd)
          })


        return (
            <div className='Slate'>
                <header className='Slate-header'>
                    <p className='App-text' style={{ marginRight: "22vw" }}>ROUND 1</p>
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
                    <p className='App-text'>
                        Press any key to commence!!
                    </p>
                </div>
                <div className='Battle_Deck'>
                    <img src={myPokemon.image} className="pokemonImage_Battle" alt='my pokemon'></img>
                    <img src={oppositionPokemon.image} className="pokemonImage_Battle" alt='opposition pokemon'></img>
                </div>
            </div>
            
        )
    }


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
                        You can choose between...
                    </p>
                    <p className='App-text' style={{ marginLeft: "20vw" }}>
                        You're opponent has...
                    </p>
                </div>
                <div className='Card_Deck'>
                    {<RandomPokemonA cardClick = {() => setMainBlock(BattleIntroA)} />}
                    {<RandomPokemonB cardClick = {() => setMainBlock(BattleIntroB)}/>}
                    {<RandomPokemonC/>}
                
                </div>
                <p className='App-text'>
                    Click on the Pokemon you choose to battle
                </p>
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