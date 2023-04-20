import React, { useState, useEffect } from 'react'
import '../App.css'
import logo from '../assets/PokeTrumps logo.png'


const BattleEndComponent = (props) => {

    // call the the bulk pokemon battle data for use
    const myPokemon = JSON.parse(localStorage.getItem("pokemonAData"))
    console.log(myPokemon["pokemonName"])

    const oppositionPokemon = JSON.parse(localStorage.getItem("pokemonCData"))
    console.log(oppositionPokemon["pokemonName"])

    const battleAttribute = localStorage.getItem("battleAttribute")



   return (
       <div>
           {localStorage.result == "draw" &&
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
                           {myPokemon.pokemonName} drew against {oppositionPokemon.pokemonName} on {battleAttribute}!
                       </p>
                       <p className='App-text'>
                           Would you like to play again?
                       </p>
                   </div>
                   <div style={{ marginLeft: "-1vw", marginRight: "auto"}}>
                       <button 
                           type= "button" 
                           className='Red-button' 
                           style={{ margin: "0vw 1vw", display: "inline-block", scale: "80%"  }}
                           onClick= {props.buttonClickYes}>
                               Yes please
                       </button>
                       <button 
                           type= "button" 
                           className='Red-button' 
                           style={{ margin: "0vw 1vw", display:"inline-block", scale: "80%"  }}
                           onClick= {props.buttonClickNo}>
                               No thanks
                       </button>
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
                       <p className='App-text' style={{ marginRight: "22vw" }}>ROUND {localStorage.getItem("round")}</p>
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
                               Would you like to play again?
                           </p>
                       </div>
                       <div style={{ marginLeft: "-1vw", marginRight: "auto"}}>
                           <button 
                               type= "button" 
                               className='Red-button' 
                               style={{ margin: "0vw 1vw", display: "inline-block", scale: "80%"  }}
                               onClick= {props.buttonClickYes}>
                                   Yes please
                           </button>
                           <button 
                               type= "button" 
                               className='Red-button' 
                               style={{ margin: "0vw 1vw", display:"inline-block", scale: "80%"  }}
                               onClick= {props.buttonClickNo}>
                                   No thanks
                           </button>
                       </div>
                       <div className='Battle_Deck'>
                           <img src={myPokemon.image} className="pokemonImage_End" alt='my pokemon' ></img>
                       </div>
               </div>
           }
           
           {localStorage.result == "lose" &&
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
                               I'm afraid {myPokemon.pokemonName} lost to {oppositionPokemon.pokemonName} on {battleAttribute}!
                           </p>
                           <p className='App-text'>
                               Would you like to play again?
                           </p>
                       </div>
                       <div style={{ marginLeft: "-1vw", marginRight: "auto"}}>
                           <button 
                               type= "button" 
                               className='Red-button' 
                               style={{ margin: "0vw 1vw", display: "inline-block", scale: "80%"  }}
                               onClick= {props.buttonClickYes}>
                                   Yes please
                           </button>
                           <button 
                               type= "button" 
                               className='Red-button' 
                               style={{ margin: "0vw 1vw", display:"inline-block", scale: "80%"  }}
                               onClick= {props.buttonClickNo}>
                                   No thanks
                           </button>
                       </div>
                       <div className='Battle_Deck'>
                           <img src={oppositionPokemon.image} className="pokemonImage_End" alt='opposition pokemon'></img>
                       </div>
               </div>
           }          
       </div>
   )
}

export default BattleEndComponent