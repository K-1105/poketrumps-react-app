import React, { useState, useEffect } from 'react'
import '../../App.css'


const RedButton = ({ message = ""}, props) => {

    const [action, setAction] = useState()
    
    // const ClickButton = (actionResult) => {
    //     return (
    //         useEffect(() => {
    //             setAction(actionResult)
    //             console.log("clicked")
    //         }, []) 
    //     )
    // }

    
    return (
        <button 
            type="button" 
            className='Red-button'
            // onClick={props.doClickProp} 
            >
                {message}
        </button>
    )
}

export default RedButton